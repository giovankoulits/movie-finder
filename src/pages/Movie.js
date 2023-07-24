import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Movie = ({ pic, heading, details }) => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${location.state.imdbID}&apikey=40f50920`)
      .then((res) => res.json())
      .then((movie) => setData(movie));
  }, []);

  const { id } = useParams();
  const location = useLocation();
  return (
    data && (
      <div>
        <img src={location.state.Poster} alt={id} />
        <h1>{data.Year}</h1>
        <p>{data.Plot}</p>
        <button onClick={(e) => console.log(data)}>Click</button>
      </div>
    )
  );
};

export default Movie;
