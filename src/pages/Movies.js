import Card from '../components/Card/Card';
import { useState, useEffect } from 'react';
import SearchForm from '../components/Search/SearchForm';
import { useLocation } from 'react-router-dom';
const Movies = ({ list }) => {
  const [moviesList, setMoviesList] = useState('');
  const [formData, setFormData] = useState('');
  const [number, setNumber] = useState(1);

  //Logic
  function submitForm(data) {
    setFormData(data);
  }

  async function getMovies(url) {
    const moviesURL = await fetch(url);
    const list = await moviesURL.json();
    setMoviesList(list);
  }

  function setFavorite(movie) {
    let favoritesArray;

    if (!localStorage.getItem('movies')) {
      favoritesArray = [movie];
      localStorage.setItem('movies', JSON.stringify(favoritesArray));
    }
    favoritesArray = JSON.parse(localStorage.getItem('movies'));

    if (favoritesArray.some((fav) => fav.imdbID === movie.imdbID)) {
      return;
    }

    favoritesArray.push(movie);
    localStorage.setItem('movies', JSON.stringify(favoritesArray));
  }

  useEffect(() => {
    if (formData)
      getMovies(
        `http://www.omdbapi.com/?s=${formData.title}&y=${formData.year}&type=${formData.type}&apikey=40f50920`
      );
  }, [formData]);

  return (
    <>
      <div className='row d-flex gy-2 gx-2 justify-content-center'>
        <SearchForm handleSubmit={submitForm} />
      </div>
      <div className='row gy-2 gx-2 d-flex flex-wrap justify-content-center'>
        {moviesList.Search &&
          moviesList.Search.map((movie, i) => (
            //<div className='col-sm-6 col-xl-2'>
            <Card key={i} addFavorite={setFavorite} movie={movie} index={i} />
          ))}
      </div>
    </>
  );
};

export default Movies;
