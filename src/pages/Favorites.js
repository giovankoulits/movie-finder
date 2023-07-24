import Card from '../components/Card/Card';
import { useState } from 'react';
const Favorites = () => {
  const storage = JSON.parse(localStorage.getItem('movies'));
  const [favorites, setFavorites] = useState(storage);

  function handleDelete(id) {
    let items = Array.from(favorites);
    let updatedMovieArray = items.filter((fav) => fav.imdbID !== id);
    setFavorites(updatedMovieArray);
    localStorage.setItem('movies', JSON.stringify(updatedMovieArray));
  }

  return (
    <div className='row gy-5 gx-5 d-flex'>
      {favorites &&
        favorites.map((movie, i) => (
          <Card deleteFavorite={handleDelete} movie={movie} index={i} />
        ))}
    </div>
  );
};

export default Favorites;
