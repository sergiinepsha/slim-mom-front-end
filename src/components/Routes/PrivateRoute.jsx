import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
   const isloading = useSelector(state => state.authUser.loading);
   return (
      <Route
         {...routeProps}
         render={props => {
            return isloading ? <Component {...props} /> : <Redirect to="/login" />;
         }}
      />
   );
};

export default PrivateRoute;
