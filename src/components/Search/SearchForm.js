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
      className='d-flex flex-wrap py-2'
    >
      <div className='col-9 text-start'>
        <label className='fw-bold mb-1 text-light'>Movie Title</label>

        <input
          type='text'
          className='form-control'
          placeholder='Search Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='col-3'>
        <label style={{ color: '#121212' }} className='fw-bold mb-1'>
          l
        </label>

        <button id='form-button' type='submit' className='btn w-100'>
          Search
        </button>
      </div>
      <div className='col-6 my-4 pe-2 text-start'>
        <label className='fw-bold mb-1 text-light'>Relaese Year</label>
        <input
          type='text'
          className='form-control'
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <div className='col-6 my-4 ps-2 text-start'>
        <label className='fw-bold mb-1 text-light '>Type</label>
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
    </form>
  );
};

export default Search;
