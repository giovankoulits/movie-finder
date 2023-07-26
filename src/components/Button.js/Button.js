//Pics

import heartSolid from '../../assets/heart-solid.png';
import bin from '../../assets/bin.png';

const Button = ({ addFavorite, movie, deleteFavorite }) => {
  return (
    <>
      {addFavorite ? (
        <div
          onClick={() => {
            addFavorite(movie);
          }}
          className='heart-btn'
        >
          <img style={{ width: '22px' }} src={heartSolid} alt='heart-icon' />
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
