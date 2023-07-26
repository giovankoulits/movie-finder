import { NavLink, Outlet } from 'react-router-dom';
import videoPlayer from '../assets/video-player.png';
import './RootLayout.css';

const RootLayout = () => {
  localStorage.removeItem('search');
  return (
    <div className='App'>
      <div className='container-xl py-5 px-3 px-lg-0'>
        <header>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/favorites'>Favorites</NavLink>
          </nav>
          <h1 className='mb-4'>
            <img
              style={{ width: '40px', position: 'relative', top: '-6px' }}
              src={videoPlayer}
              alt='video-player'
            />{' '}
            Movie FInder
          </h1>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
