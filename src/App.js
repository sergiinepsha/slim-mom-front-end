import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import routes from './routes/routes';
import { PrivateRoute, PublicRoute } from './components/common/Routes';
import { userOperations, userSelector } from './redux/auth';

import Header from './components/presentational/Header';
import Loader from './components/presentational/Loader';
import Alert from './components/presentational/Alert';

const App = () => {
   const token = useSelector(userSelector.isAuth);
   const dispatch = useDispatch();

   useEffect(() => {
      userOperations.getCurrentUser(token, dispatch);
   }, [dispatch, token]);

   return (
      <>
         <Alert />
         <Router>
            <Header />

            <Suspense fallback={<Loader />}>
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
