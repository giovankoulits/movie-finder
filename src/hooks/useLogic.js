//Hooks
import { useState, useEffect, useContext } from 'react';
const useLogic = () => {
  const [formData, setFormData] = useState('');
  const [movies, setMovies] = useState([]);
  const [numOfPages, setNumOfPages] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    const moviesURL = await fetch(url);
    const res = await moviesURL.json();
    //Search is returned by  successful requests
    setIsLoading(false);

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

  const handleFavorite = (movie) => {
    let favoritesArray = JSON.parse(localStorage.getItem('movies'));
    //Remove Item
    if (favoritesArray === '[]') {
      favoritesArray = [];
    }
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
        `https://www.omdbapi.com/?s=${formData.title}&y=${formData.year}&type=${formData.type}&page=${currentPage}&apikey=${process.env.REACT_APP_API_KEY}`
      );
  }, [formData, currentPage]);

  //Listen for Scroll Event
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem('movies')) {
      localStorage.setItem('movies', JSON.stringify([]));
    }
  }, []);

  return {
    handleFavorite,
    submitForm,
    movies,
    isLoading,
  };
};

export default useLogic;
