import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, isAuth, ...routeProps }) => {
   const isLoading = useSelector(state => state.authUser.loading);
   return (
      <Route
         {...routeProps}
         render={props => {
            return isLoading && routeProps.restricted ? (
               <Redirect to="/calculator" />
            ) : (
               <Component {...props} />
            );
         }}
      />
   );
};

export default PublicRoute;
