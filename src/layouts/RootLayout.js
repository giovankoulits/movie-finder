import './RootLayout.css';
import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='App'>
      <div className='container'>
        <header>
          <nav>
            <h1>IMDB Movies</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
