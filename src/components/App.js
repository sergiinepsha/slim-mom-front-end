import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';

import routes from '../routes/routes';
import { PrivateRoute, PublicRoute } from '../components/Routes';
import { userOperations, userSelector } from '../redux/auth';

import Header from './Header';
import Loader from './Loader';

const App = () => {
   const token = useSelector(userSelector.isAuth);
   const dispatch = useDispatch();
   const history = useHistory();

   useEffect(() => {
      userOperations.currentUser(token, dispatch);
   }, [dispatch, token]);

   // useEffect(() => {
   //    history.replace('/calculator');
   // }, [history]);

   return (
      <>
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
