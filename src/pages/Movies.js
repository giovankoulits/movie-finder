import Card from '../components/Card/Card';
import { useState, useEffect } from 'react';

const Movies = ({ list }) => {
  const [moviesList, setMoviesList] = useState('');

  async function getMovies(url) {
    const moviesURL = await fetch(url);
    const list = await moviesURL.json();
    setMoviesList(list);
  }

  function setFavorites(movie) {
    let favoritesArray;
    if (!localStorage.getItem('movies')) {
      favoritesArray = [];
      favoritesArray.push(movie);
      localStorage.setItem('movies', JSON.stringify(favoritesArray));
    }
    favoritesArray = JSON.parse(localStorage.getItem('movies'));
    favoritesArray.push(movie);
    localStorage.setItem('movies', JSON.stringify(favoritesArray));
  }

  useEffect(() => {
    getMovies(`http://www.omdbapi.com/?s=star wars&apikey=40f50920`);
  }, []);

  return (
    <div className='row gy-5 gx-5'>
      {moviesList &&
        moviesList.Search.map((movie, i) => (
          <div className='col-lg-4 col-sm-6 col-xl-3'>
            <Card handleFavorites={setFavorites} movie={movie} index={i} />
          </div>
        ))}
    </div>
  );
};

export default Movies;
