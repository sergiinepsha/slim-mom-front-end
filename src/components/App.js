import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import routes from '../routes/routes';
import { PrivateRoute, PublicRoute } from '../components/Routes';
import { userOperations } from '../redux/auth';

import Header from './Header';
// import MainPage from './views/MainPage/MainPage';
// import RegisterPage from './views/RegisterPage/RegisterPage';
// import LoginPage from './views/LoginPage/LoginPage';

const App = () => {
   return (
      <>
         <Header />
         {/* <MainPage /> */}
         {/* <RegisterPage /> */}
         {/* <LoginPage /> */}
      </>
   );
};

const mapDisp = {
   onCurrentUser: userOperations.currentUser,
};

export default connect(null, mapDisp)(App);
