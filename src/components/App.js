import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import Loader from 'react-loader-spinner';

import routes from '../routes/routes';
import { PrivateRoute, PublicRoute } from '../components/Routes';

import Header from './Header';
import Loader from './Loader';

const App = () => {
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
