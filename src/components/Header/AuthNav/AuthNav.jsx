import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
   return (
      <>
         <NavLink exact to={`/register`} className="link" activeClassName="active-link">
            Register
         </NavLink>

         <NavLink exact to={`/login`} className="link" activeClassName="active-link">
            Login
         </NavLink>
      </>
   );
};

export default AuthNav;
