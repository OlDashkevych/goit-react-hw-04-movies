import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Particles from 'react-particles-js';

import Navigation from '../Navigation/Navigation';
import routes from '../../routes/routes';
import styles from './App.module.css';
import particlesParams from '../../js/particlesParams';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Particles className={styles.particles} params={particlesParams} />
      <Navigation />
      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            className={styles.loader}
          />
        }
      >
        <Switch>
          <Route
            exact
            path={routes.HOME_PAGE.path}
            component={routes.HOME_PAGE.component}
          />
          <Route
            path={routes.MOVIES_DETAILS_PAGE.path}
            component={routes.MOVIES_DETAILS_PAGE.component}
          />
          <Route
            path={routes.MOVIES_PAGE.path}
            component={routes.MOVIES_PAGE.component}
          />
          <Redirect to={routes.HOME_PAGE.path} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
