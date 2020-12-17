import React, { useState } from 'react';
import { connect } from 'react-redux';

import { userSelector } from '../../../redux/auth';
import AuthNav from './AuthNav';
import UserNav from './UserNav';

import s from './Navigation.module.css';

const Navigation = ({ isAuth }) => {
   const [bars, setBars] = useState(false);

   function handlerButton() {
      setBars(!bars);
   }

   return (
      <>
         <nav className={s.nav}>
            <button onClick={() => handlerButton()} className={s.button} />
            <ul className={s.navBar}>{!isAuth ? <UserNav /> : <AuthNav />}</ul>
         </nav>
      </>
   );
};
const mapStateToProps = state => ({
   isAuth: userSelector.isAuth(state),
});

export default connect(mapStateToProps)(Navigation);
