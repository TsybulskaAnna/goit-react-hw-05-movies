import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./components/Header/Header'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));




export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>....Loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*"  />
        </Routes>
      </Suspense>
    </>
  );
};
