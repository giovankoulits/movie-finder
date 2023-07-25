import Card from '../components/Card/Card';
import { useState, useEffect } from 'react';
import SearchForm from '../components/Search/SearchForm';

const Movies = () => {
  //State
  const [formData, setFormData] = useState('');
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  //Logic
  function submitForm(data) {
    if (!data.title.length) {
      alert('please provide a movie title');
      return;
    }
    //Get movies from storage on rerender
    localStorage.setItem('search', JSON.stringify(data));
    setFormData(data);
  }

  async function getMovies(url) {
    const moviesURL = await fetch(url);
    const res = await moviesURL.json();
    //Search is returned by  successful requests
    if (res.Search) {
      let numOfPages = Math.ceil(parseInt(res.totalResults) / 10);
      setPages(numOfPages);
      setMovies((prev) => [...prev, ...res.Search]);
      //
      //
      return;
    }
    if (res.Error && formData.title?.length) {
      alert(
        'We could not find what you asked for. Please try a search with different parameters'
      );
    }
  }

  function addFavorite(movie) {
    let favoritesArray;
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
    localStorage.setItem('movies', JSON.stringify(favoritesArray));
  }

  //Fetch according to search
  useEffect(() => {
    let storage = JSON.parse(localStorage.getItem('search'));
    if (storage)
      getMovies(
        `http://www.omdbapi.com/?s=${storage.title}&y=${storage.year}&type=${storage.type}&apikey=40f50920`
      );
  }, [formData]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setCurrentPage((prev) => prev + 1);
      let storage = JSON.parse(localStorage.getItem('search'));
      getMovies(
        `http://www.omdbapi.com/?s=${storage.title}&y=${storage.year}&type=${
          storage.type
        }&page=${currentPage + 1}&apikey=40f50920`
      );
    }
  }

  //Listen for Scroll
  /*   useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); */

  console.log(currentPage);
  return (
    <>
      <div className='row d-flex justify-content-center'>
        <SearchForm handleSubmit={submitForm} />
      </div>
      <div className='row gy-2 gx-2 d-flex flex-wrap justify-content-center'>
        {movies &&
          movies.map((movie, i) => (
            <Card key={i} addFavorite={addFavorite} movie={movie} index={i} />
          ))}
      </div>
    </>
  );
};

export default Movies;
