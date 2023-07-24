import './RootLayout.css';
import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='App'>
      <div className='container-xl py-5 px-3 px-lg-0'>
        <header>
          <h1 style={{ color: '#F5C518' }} className='mb-5'>
            Movie FInder
          </h1>

          <nav>
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
