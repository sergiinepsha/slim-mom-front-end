import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { userSelector } from '../../redux/auth/index';

export default function PublicRoute({ component: Component, restricted, ...routeProps }) {
   const isAuth = useSelector(userSelector.isAuth);
   console.log('PubRout', isAuth);
   console.log(restricted);

   return (
      <Route
         {...routeProps}
         render={props =>
            isAuth && restricted ? <Redirect to="/calculator" /> : <Component {...props} />
         }
      />
   );
}
