import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import routes from '../routes/routes';
import { PrivateRoute, PublicRoute } from '../components/Routes';
import { userOperations } from '../redux/auth';

import AppBar from './Header/Header';

const App = () => {
  return (
    <>
      {' '}
      <Router>
        <AppBar />

        <Suspense fallback={<span>Loading</span>}>
          <Switch>
            {routes.map(route =>
              route.private ? (
                <PrivateRoute key={route.path} {...route} />
              ) : (
                <PublicRoute key={route.path} {...route} />
              ),
            )}
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};

const mapDisp = {
  onCurrentUser: userOperations.currentUser,
};

export default connect(null, mapDisp)(App);
