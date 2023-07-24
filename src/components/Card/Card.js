import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import heartSolid from '../../assets/heart-solid.png';
import bin from '../../assets/bin.png';
import readMore from '../../assets/read-more.png';
import unavailable from '../../assets/unavailable.png';

const Card = ({ movie, index, addFavorite, deleteFavorite }) => {
  const button = addFavorite ? (
    <div
      onClick={() => {
        addFavorite(movie);
      }}
      className='heart-btn'
    >
      <img style={{ width: '22px' }} src={heartSolid} alt='heart-icon' />
    </div>
  ) : (
    <div onClick={() => deleteFavorite(movie.imdbID)} className='delete-btn'>
      <img style={{ width: '22px' }} src={bin} alt='bin-icon' />
    </div>
  );
  const poster = movie.Poster === 'N/A' ? unavailable : movie.Poster;

  return (
    <div className='col-md-12 col-lg-3 d-flex justify-content-center col-xl-2 m-3'>
      <div className='my-card' tabIndex='0'>
        <img src={poster} alt={movie.Title} draggable='false' />
        <div className='my-info'>
          {button}
          <h3 className='my-title text-start'>{movie.Title}</h3>
          <h6
            style={{ color: 'white', fontWeight: 'bold' }}
            id='my-description'
          >
            {movie.Year}
          </h6>
          <Link to={`/${index}`} state={movie} className='my-link'>
            <img style={{ width: '20px' }} src={readMore} alt='link' /> Read
            more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
