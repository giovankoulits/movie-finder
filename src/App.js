import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import useLogic from './hooks/useLogic';

//pages
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';
import Movie from './pages/Movie';
import RootLayout from './layouts/RootLayout';

//styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Router

function App() {
  const { handleFavorite, submitForm, movies, isLoading } = useLogic();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route
          index
          element={
            <Movies
              handleFavorite={handleFavorite}
              submitForm={submitForm}
              movies={movies}
              isLoading={isLoading}
            />
          }
        />
        <Route path='favorites' element={<Favorites />} />
        <Route path=':id' element={<Movie />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
