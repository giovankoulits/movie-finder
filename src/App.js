//Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

//pages
import Movies from './pages/Movies';
import Favorites from './pages/Favorites';
import Movie from './pages/Movie';
import RootLayout from './layouts/RootLayout';

//styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Movies />} />
      <Route path='favorites' element={<Favorites />} />
      <Route path=':id' element={<Movie />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
