import heartSolid from '../../assets/heart-solid.png';
import heart from '../../assets/heart.png';
import bin from '../../assets/bin-solid.png';
import { useState } from 'react';

import './Button.css';

const Button = ({ addFavorite, movie, deleteFavorite }) => {
  let storage = JSON.parse(localStorage.getItem('movies'));
  let favorite = storage?.some((item) => item.imdbID === movie.imdbID);
  const [isfavorite, setIsFavorite] = useState(favorite);

  return (
    <>
      {addFavorite ? (
        <div
          onClick={() => {
            setIsFavorite((prev) => !prev);
            addFavorite(movie);
          }}
          className='heart-btn'
        >
          <img
            style={{ width: '22px' }}
            src={favorite ? heartSolid : heart}
            alt='heart-icon'
          />
        </div>
      ) : (
        <div
          onClick={() => deleteFavorite(movie.imdbID)}
          className='delete-btn'
        >
          <img style={{ width: '22px' }} src={bin} alt='bin-icon' />
        </div>
      )}
    </>
  );
};

export default Button;
