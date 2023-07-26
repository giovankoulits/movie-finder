//Components
import { Link } from 'react-router-dom';
import Button from '../Button.js/Button';
//Pics
import readMore from '../../assets/read-more.png';
import unavailable from '../../assets/unavailable.png';

//Styles
import './Card.css';

const Card = ({ movie, index, addFavorite, deleteFavorite }) => {
  const poster = movie.Poster === 'N/A' ? unavailable : movie.Poster;

  return (
    <div className='col-md-12 col-lg-4 d-flex justify-content-center col-xl-3 p-3'>
      <div className='my-card' tabIndex='0'>
        <img src={poster} alt={movie.Title} draggable='false' />
        <div className='my-info'>
          <Button
            addFavorite={addFavorite}
            movie={movie}
            deleteFavorite={deleteFavorite}
          />
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
