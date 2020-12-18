import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userSelector } from '../../redux/auth';

export default function PrivateRoute({ component: Component, ...routeProps }) {
   const isAuth = useSelector(userSelector.isAuth);

   return (
      <Route
         {...routeProps}
         render={props => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)}
      />
   );
}
