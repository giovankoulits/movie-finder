import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ movie, index, handleFavorites }) => {
  return (
    <div key={index + Math.random().toString()} className='card'>
      <img src={movie.Poster} className='card-img-top' />
      <div className='card-body d-flex justify-content-between'>
        <Link to={`/${index}`} state={movie} className='btn btn-primary'>
          Learn More
        </Link>
        <button
          onClick={() => handleFavorites(movie)}
          className='btn btn-danger'
        >
          {handleFavorites ? '♥' : '🗑'}
        </button>
      </div>
    </div>
  );
};

export default Card;
