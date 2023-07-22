import Card from '../components/Card/Card';

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('movies'));
  return (
    <div className='row gy-5 gx-5'>
      {favorites.map((movie, i) => (
        <div className='col-lg-4 col-sm-6 col-xl-3'>
          <Card movie={movie} index={i} />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
