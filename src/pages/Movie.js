import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import unavailable from '../assets/unavailable.png';
import Spinner from '../components/Spinner/Spinner';
import './Movie.css';

const Movie = () => {
  const location = useLocation();
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  //Fetch by ID
  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?i=${location.state.imdbID}&plot=full&apikey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((movie) => setData(movie))
      .then((end) => setLoading(false));
  }, [location]);
  return loading ? (
    <div className='row d-flex justify-content-center'>
      <Spinner />
    </div>
  ) : (
    data && (
      <div className='row d-flex'>
        <div className='col-12 col-md-4  col-lg-6 d-flex justify-content-center justify-content-lg-end'>
          <div className='movie-card mb-5'>
            <img
              src={data.Poster === 'N/A' ? unavailable : data.Poster}
              className='card-img-top '
              alt={data.Title}
            />
          </div>
        </div>
        <div className='movie-page-body col-12 col-sm-10 col-md-8 col-lg-4 flex-wrap d-flex flex-column justify-content-lg-start'>
          <div className='w-100'>
            <h2 className='text-start mb-5'>{data.Title}</h2>
            <h4 className='text-start text-light'>
              <span>|</span> Plot
            </h4>
            <p style={{ textAlign: 'justify' }} className='mb-4'>
              {data.Plot}
            </p>
          </div>
          <div>
            <h4 className='text-start text-light'>
              <span>|</span> Cast
            </h4>
            <p style={{ textAlign: 'justify' }} className='text-light mb-4'>
              {data?.Actors}
            </p>
          </div>
          <div>
            <h4 className='text-start text-light'>
              <span>|</span> Rating
            </h4>
            <p style={{ textAlign: 'justify' }} className='text-light mb-4'>
              {data.Ratings[0]?.Value || 'N/A'}
            </p>
          </div>
        </div>
      </div>
    )
  );
};

/*    <div>
        <img src={location.state.Poster} alt={id} />
        <h1>{data.Year}</h1>
        <p>{data.Plot}</p>
        <button onClick={(e) => console.log(data)}>Click</button>
      </div> */
export default Movie;
