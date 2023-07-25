import './RootLayout.css';
import { NavLink, Outlet } from 'react-router-dom';
const RootLayout = () => {
  localStorage.removeItem('search');
  return (
    <div className='App'>
      <div className='container-xl py-5 px-3 px-lg-0'>
        <header>
          <h1 style={{ color: 'var(--gold)' }} className='mb-5'>
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
