import './RootLayout.css';
import { NavLink, Outlet } from 'react-router-dom';
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
          <h1 className='mb-4'>Movie FInder</h1>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
