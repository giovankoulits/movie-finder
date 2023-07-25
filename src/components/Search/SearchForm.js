import './SearchForm.css';
import { useState } from 'react';
const Search = ({ handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('movie');

  //logic

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ title, year, type });
      }}
      id='searchForm'
      className='d-flex flex-wrap '
    >
      <div className='col-6 col-xl-3 my-4 my-xl-0 pe-3 text-start'>
        <input
          type='text'
          className='form-control'
          placeholder='Year of release'
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <div className='col-6 col-xl-3 my-4 my-xl-0 pe-xl-3 text-start'>
        {/*  <label className='fw-bold mb-1 text-light '>Type</label> */}
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
      <div className='col-9 col-xl-4 text-start ps-xl-5'>
        <input
          type='text'
          className='form-control'
          placeholder='Search Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='col-3 col-xl-2 '>
        <button id='form-button' type='submit' className='btn w-100'>
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
