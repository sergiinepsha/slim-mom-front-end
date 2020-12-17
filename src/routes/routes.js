/* eslint-disable import/no-anonymous-default-export */
// export default {
//    mainPage: '/',
//    loginPage: '/login',
//    registerPage: '/register',
//    diary: '/diary',
//    calculatorPage: '/calculator',
// };
import { lazy } from 'react';

export default [
   {
      path: '/',
      label: 'Home',
      exact: true,
      component: lazy(() =>
         import('../components/views/HomePage/HomePage.jsx' /* webpackChunkName: "home-page" */),
      ),
      private: false,
      restricted: false,
   },
   // {
   //    path: '/diary',
   //    label: 'Diary',
   //    exact: true,
   //    component: lazy(() =>
   //       import('../components/views/Diary/DiaryView.jsx' /* webpackChunkName: "home-page" */),
   //    ),
   //    private: false,
   //    restricted: false,
   // },
   // {
   //   path: '/login',
   //   label: 'Login',
   //   exact: true,
   //    component: lazy(() =>
   //     import(
   //       './components/Auth/Login/LoginView' /* webpackChunkName: "login" */
   //      ),
   //    ),
   //   private: false,
   //   restricted: false,
   // },
   // {
   //   path: '/register',
   //   label: 'Register',
   //   exact: true,
   //   component: lazy(() =>
   //     import(
   //       './components/Auth/Register/RegisterView' /* webpackChunkName: "register" */
   //   //   ),
   //   // ),
   //   private: false,
   //   restricted: false,
   // },
   // {
   //   path: '/calculator',
   //   label: 'Calculator',
   //   exact: true,
   //   component: lazy(() =>
   //     import(
   //        './components/Header/Calculator/CalculatorView' /* webpackChunkName: "calculator" */
   //      ),
   //    ),
   //   private: false,
   //   restricted: false,
   // },
];
