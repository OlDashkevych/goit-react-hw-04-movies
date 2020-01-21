import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import(
    '../pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "show-details-page" */
  ),
);

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
