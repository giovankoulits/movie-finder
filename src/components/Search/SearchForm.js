import './SearchForm.css';
import { useState } from 'react';
const Search = ({ handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('movie');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ title, year, type });
      }}
      id='searchForm'
      className=' d-flex flex-wrap p-2'
    >
      <div className=' pe-md-3 pb-3 col-sm-12 col-md-6 '>
        <input
          type='text'
          className='form-control'
          placeholder='Search Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className=' pe-3 mb-3 col-sm-12 col-md-6 col-lg-2'>
        <input
          type='text'
          className='form-control'
          placeholder='Year'
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <div className=' mb-3 pe-3 col-sm-12 col-md-6 col-lg-2'>
        <select
          onChange={(e) => {
            setType(e.target.value);
          }}
          className='form-select'
          value={type}
        >
          <option value='movie'>Movie</option>
          <option value='series'>Series</option>
          <option value='episode'>Episode</option>
        </select>
      </div>
      <div className='pb-3 col-sm-12 col-md-6 col-lg-2 d-flex justify-content-end align-items-end'>
        <button id='form-button' type='submit' className=' btn w-100'>
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
