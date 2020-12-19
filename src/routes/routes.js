import { lazy } from 'react';

export default [
   {
      path: '/',
      label: 'Home',
      exact: true,
      component: lazy(() =>
         import('../components/views/MainPage/MainPage.js' /* webpackChunkName: "home-page" */),
      ),
      private: false,
      restricted: false,
   },
   {
      path: '/login',
      label: 'Login',
      exact: true,
      component: lazy(() =>
         import('../components/views/LoginPage/LoginPage.js' /* webpackChunkName: "login" */),
      ),
      private: false,
      restricted: false,
   },
   {
      path: '/register',
      label: 'Register',
      exact: true,
      component: lazy(() =>
         import(
            '../components/views/RegisterPage/RegisterPage.js'
            /* webpackChunkName: "register" */
         ),
      ),
      private: false,
      restricted: false,
   },
   {
      path: '/calculator',
      label: 'Calculator',
      exact: true,
      component: lazy(() =>
         import('../components/views/CalculatorPage' /* webpackChunkName: "calculator" */),
      ),
      private: true,
      restricted: false,
   },
   {
      path: '/diary',
      label: 'Diary',
      exact: true,
      component: lazy(() =>
         import('../components/views/MainPage/MainPage.js' /* webpackChunkName: "home-page" */),
      ),
      private: true,
      restricted: false,
   },
];
