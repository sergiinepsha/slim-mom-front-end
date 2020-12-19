import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { userSelector } from '../../../redux/auth';
import AuthNav from './AuthNav';
import UserNav from './UserNav';

import s from './Navigation.module.css';

const Navigation = ({ isAuth }) => {
   const [bars, setBars] = useState(false);
   const [btn, setBtn] = useState('');
   const [watcher, setWatcher] = useState('');

   useEffect(() => {
      if (bars) {
         setBtn(` ${s.button} `);
         setWatcher(` ${s.nav} `);
         return;
      }
      setBtn(` ${s.button} ${s.show} `);
      setWatcher(`${s.head} ${s.nav} `);
      return;
   }, [bars]);

   function handlerButton() {
      setBars(!bars);
   }

   return (
      <>
         <button onClick={() => handlerButton()} className={btn}></button>
         <nav className={watcher}>
            <ul className={s.navBar}>{isAuth ? <UserNav /> : <AuthNav />}</ul>
         </nav>
      </>
   );
};
const mapStateToProps = state => ({
   isAuth: userSelector.isAuth(state),
});

export default connect(mapStateToProps)(Navigation);
