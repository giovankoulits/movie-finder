//Components
import Card from '../components/Card/Card';
import SearchForm from '../components/Search/SearchForm';
//custom Hook
import useLogic from '../hooks/useLogic.js';
//Dependencies
import { nanoid } from 'nanoid';
//Styles
import './Movies.css';

const Movies = () => {
  const { addFavorite, submitForm, movies } = useLogic();
  return (
    <>
      <div className='px-2 row d-flex justify-content-center  px-md-4'>
        <SearchForm handleSubmit={submitForm} />
      </div>
      <div className='row gy-2 gx-2 d-flex flex-wrap justify-content-center'>
        {movies &&
          movies.map((movie, i) => (
            <Card
              key={nanoid()}
              addFavorite={addFavorite}
              movie={movie}
              index={i}
            />
          ))}
      </div>
    </>
  );
};

export default Movies;
