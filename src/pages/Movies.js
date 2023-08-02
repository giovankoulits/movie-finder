//Components
import Card from '../components/Card/Card';
import SearchForm from '../components/Search/SearchForm';
import Spinner from '../components/Spinner/Spinner';

//Dependencies
import { nanoid } from 'nanoid';
//Styles
import './Movies.css';

const Movies = ({ handleFavorite, submitForm, movies, isLoading }) => {
  return (
    <>
      <div className='px-2 row d-flex justify-content-center  px-md-4'>
        <SearchForm handleSubmit={submitForm} />
      </div>

      <div className='row gy-2 gx-2 d-flex flex-wrap justify-content-start'>
        {movies &&
          movies.map((movie, i) => (
            <Card
              key={nanoid()}
              handleFavorite={handleFavorite}
              movie={movie}
              index={i}
            />
          ))}
      </div>
      {isLoading && <Spinner />}
    </>
  );
};

export default Movies;
