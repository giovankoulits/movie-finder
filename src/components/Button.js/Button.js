import heartSolid from '../../assets/heart-solid.png';
import heart from '../../assets/heart.png';
import bin from '../../assets/bin-solid.png';
import { useState } from 'react';

import './Button.css';

const Button = ({ handleFavorite, movie, deleteFavorite }) => {
  let storage = JSON.parse(localStorage.getItem('movies'));
  if ((storage = '[]')) {
    storage = [];
  }
  let favorite = storage?.some((item) => item.imdbID === movie.imdbID);
  const [isfavorite, setIsFavorite] = useState(favorite);

  return (
    <>
      {handleFavorite ? (
        <div
          onClick={() => {
            setIsFavorite((prev) => !prev);
            handleFavorite(movie);
          }}
          className='heart-btn'
        >
          <img
            style={{ width: '22px' }}
            src={isfavorite ? heartSolid : heart}
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
