import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';

export default {
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },
  MOVIES_DETAILS_PAGE: {
    path: '/movies/:movieId',
    component: MovieDetailsPage,
  },
  MOVIES_PAGE: {
    path: '/movies',
    component: MoviesPage,
  },
  CAST: {
    path: '/cast',
  },
  REVIEW: {
    path: '/reviews',
  },
};
