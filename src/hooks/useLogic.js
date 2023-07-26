//Hooks
import { useState, useEffect } from 'react';

const useLogic = () => {
  const [formData, setFormData] = useState('');
  const [movies, setMovies] = useState([]);
  const [numOfPages, setNumOfPages] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const submitForm = (data) => {
    if (!data.title.length) {
      alert('please provide a movie title');
      return;
    }
    //Reset states in case of new search
    setMovies([]);
    setCurrentPage(1);
    setNumOfPages(2);
    //send new form request
    setFormData(data);
  };

  const getMovies = async (url) => {
    const moviesURL = await fetch(url);
    const res = await moviesURL.json();
    //Search is returned by  successful requests

    if (res.Search) {
      setNumOfPages(Math.ceil(parseInt(res.totalResults) / 10));
      if (currentPage <= numOfPages) {
        setMovies((prev) => [...prev, ...res.Search]);
        return;
      }
      return;
    }
    //
    if (res.Error && formData.title?.length) {
      alert(
        'We could not find what you asked for. Please try a search with different parameters'
      );
    }
  };

  const addFavorite = (movie) => {
    let favoritesArray;
    //Create storage if none exists
    if (!localStorage.getItem('movies')) {
      favoritesArray = [movie];
      console.log(favoritesArray);
      localStorage.setItem('movies', JSON.parse(favoritesArray));
    }

    favoritesArray = JSON.parse(localStorage.getItem('movies'));
    //Remove Item
    if (favoritesArray.some((fav) => fav.imdbID === movie.imdbID)) {
      let movieIndex;
      favoritesArray.forEach((fav, index) =>
        fav.imdbID === movie.imdbID ? (movieIndex = index) : null
      );
      favoritesArray.splice(movieIndex, 1);
      localStorage.setItem('movies', JSON.stringify(favoritesArray));
      return;
    }
    //Add dItem
    favoritesArray.push(movie);
    //Save favorite to local storage
    localStorage.setItem('movies', JSON.stringify(favoritesArray));
  };

  //Lazy Load/infinite Scroll
  const handleScroll = () => {
    let scrollHeight =
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight;
    if (scrollHeight && currentPage < numOfPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  //Fetch by Search
  useEffect(() => {
    if (currentPage < numOfPages)
      getMovies(
        `http://www.omdbapi.com/?s=${formData.title}&y=${formData.year}&type=${formData.type}&page=${currentPage}&apikey=40f50920`
      );
  }, [formData, currentPage]);

  //Listen for Scroll Event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { addFavorite, submitForm, movies };
};

export default useLogic;
