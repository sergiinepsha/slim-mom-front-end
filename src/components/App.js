import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import routes from '../routes/routes';
import { PrivateRoute, PublicRoute } from '../components/Routes';
import { userOperations, userSelector } from '../redux/auth';

import Header from './Header';

const App = () => {
   const token = useSelector(userSelector.isAuth);
   const dispatch = useDispatch();

   useEffect(() => {
      userOperations.currentUser(token, dispatch);
   }, [dispatch, token]);

   return (
      <>
         <Router>
            <Header />

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

export default App;
