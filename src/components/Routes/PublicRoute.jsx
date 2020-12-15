import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { userSelector } from '../../redux/auth';

const PublicRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props => {
      return isAuth && routeProps.restricted ? (
        <Redirect to="/calculator" />
      ) : (
        <Component {...props} />
      );
    }}
  />
);
const mapStateToProps = state => ({
  isAuth: userSelector.isAuth(state),
});

export default connect(mapStateToProps)(PublicRoute);
