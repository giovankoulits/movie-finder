import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import heart from '../../assets/heart.png';
import bin from '../../assets/bin.png';

const Card = ({ movie, index, addFavorite, deleteFavorite }) => {
  const button = addFavorite ? (
    <button onClick={() => addFavorite(movie)}>
      <img style={{ width: '12px' }} src={heart} alt='heart-icon' />
    </button>
  ) : (
    <div onClick={() => deleteFavorite(movie.imdbID)} className='delete-btn'>
      <img style={{ width: '22px' }} src={bin} alt='bin-icon' />
    </div>
  );

  return (
    <div
      key={index + Math.random().toString()}
      className='col-xl-2 my-4 mx-2 col-md-3 px-2'
    >
      <div class='my-card' tabindex='0'>
        {button}

        <img src={movie.Poster} alt={movie.Title} draggable='false' />
        <div className='my-info'>
          <h3 className='my-title text-start'>{movie.Title}</h3>
          <p style={{ color: 'white' }} id='my-description'>
            {movie.Year}
          </p>
          <Link to={`/${index}`} state={movie} className='my-link'>
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
