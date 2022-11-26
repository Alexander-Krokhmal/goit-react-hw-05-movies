// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import { Layout } from './Layout/Layout';
import { NotFound } from './NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { lazy } from 'react';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={ <Cast/>} />
            <Route path="reviews" element={ <Reviews/> } />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>

      <ToastContainer autoClose={3000} theme="colored" />
    </div>
  );
};
