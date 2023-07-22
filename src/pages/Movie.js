import { useParams, useLocation } from 'react-router-dom';

const Movie = ({ pic, heading, details }) => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <img src={location.state.Poster} alt='' />
      <h1>hello</h1>
    </div>
  );
};

export default Movie;
