import Card from '../components/Card/Card';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Favorites = () => {
  let storage = JSON.parse(localStorage.getItem('movies'));

  const [favorites, setFavorites] = useState(storage);
  console.log(typeof favorites);
  function handleDelete(id) {
    let items = Array.from(favorites);
    let updatedMovieArray = items.filter((fav) => fav.imdbID !== id);
    setFavorites(updatedMovieArray);
    localStorage.setItem('movies', JSON.stringify(updatedMovieArray));
  }
  return (
    <div className='row gy-2 gx-2 d-flex flex-wrap justify-content-start my-5'>
      {favorites.length &&
        favorites.map((movie, i) => (
          <Card
            key={nanoid()}
            deleteFavorite={handleDelete}
            movie={movie}
            index={i}
          />
        ))}
    </div>
  );
};

export default Favorites;
