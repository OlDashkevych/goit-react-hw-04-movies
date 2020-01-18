import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import routes from '../../routes/routes';

const App = () => {
  return (
    <>
      <Navigation />
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
    </>
  );
};

export default App;
