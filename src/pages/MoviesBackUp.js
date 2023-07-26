//Components
import Card from '../components/Card/Card';
import Spinner from '../components/Spinner/Spinner';
import SearchForm from '../components/Search/SearchForm';
import { nanoid } from 'nanoid';
//Hooks
import { useState, useEffect } from 'react';
//Styles
import './Movies.css';

const Movies = () => {
  //State
  const [formData, setFormData] = useState('');
  const [movies, setMovies] = useState([]);
  const [numOfPages, setNumOfPages] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //Logic
  function submitForm(data) {
    if (!data.title.length) {
      alert('please provide a movie title');
      return;
    }
    //Reset states in case of new search
    setMovies([]);
    setCurrentPage(1);
    setNumOfPages(2);
    //send new form request
    setFormData(data);
  }

  async function getMovies(url) {
    const moviesURL = await fetch(url);
    const res = await moviesURL.json();
    //Search is returned by  successful requests

    if (res.Search) {
      setNumOfPages(Math.ceil(parseInt(res.totalResults) / 10));
      if (currentPage <= numOfPages) {
        setMovies((prev) => [...prev, ...res.Search]);
        return;
      }
      return;
    }
    //
    if (res.Error && formData.title?.length) {
      alert(
        'We could not find what you asked for. Please try a search with different parameters'
      );
    }
  }

  function addFavorite(movie) {
    let favoritesArray;
    //Create storage if none exists
    if (!localStorage.getItem('movies')) {
      favoritesArray = [movie];
      localStorage.setItem('movies', JSON.stringify(favoritesArray));
    }
    favoritesArray = JSON.parse(localStorage.getItem('movies'));
    //Prevent duplicates in favorites
    if (favoritesArray.some((fav) => fav.imdbID === movie.imdbID)) {
      return;
    }
    favoritesArray.push(movie);
    //Save favoriters to local storage
    localStorage.setItem('movies', JSON.stringify(favoritesArray));
  }

  //Lazy Load/infinite Scroll
  function handleScroll() {
    let scrollHeight =
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight;
    if (scrollHeight && currentPage < numOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }

  //Fetch by Search
  useEffect(() => {
    if (currentPage < numOfPages)
      getMovies(
        `http://www.omdbapi.com/?s=${formData.title}&y=${formData.year}&type=${formData.type}&page=${currentPage}&apikey=40f50920`
      );
    console.log(currentPage, numOfPages);
  }, [formData, currentPage]);

  //Listen for Scroll Event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='row d-flex justify-content-center'>
        <SearchForm handleSubmit={submitForm} />
      </div>
      <div className='row gy-2 gx-2 d-flex flex-wrap justify-content-center'>
        {movies &&
          movies.map((movie, i) => (
            <Card
              key={nanoid()}
              addFavorite={addFavorite}
              movie={movie}
              index={i}
            />
          ))}
      </div>
      {loading && <Spinner />}
    </>
  );
};

export default Movies;
