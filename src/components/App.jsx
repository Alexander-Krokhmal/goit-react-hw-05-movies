import Home from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies/Movies';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import { Layout } from './Layout/Layout';
import { NotFound } from './NotFound/NotFound';

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
            <Route path="reviews" element={ <div>Reviews</div>  } />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
