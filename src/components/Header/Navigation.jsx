import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ isAuth }) => {
   return (
      <nav>
         <ul>
            <li>
               <NavLink exact to={`/`} className="link" activeClassName="active-link">
                  Home
               </NavLink>
            </li>
         </ul>
      </nav>
   );
};

export default Navigation;
