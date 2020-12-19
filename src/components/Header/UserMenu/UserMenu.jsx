import React, { useState } from 'react';
import { connect } from 'react-redux';

import { userSelector, userOperations } from '../../../redux/auth';
import s from './UserMenu.module.css';

const UserMenu = ({ name, onLogout, isloading }) => {
   const [state, setstate] = useState('Nic');
   return (
      <>
         <div className={s.item}>
            {!isloading && (
               <>
                  <p className={s.name}>{state}</p>
                  <button className={s.button} onClick={onLogout}>
                     Bыход
                  </button>
               </>
            )}
         </div>
      </>
   );
};

const mapState = state => ({
   isloading: userSelector.isloading(state),
   name: userSelector.getUserName(state),
});

const mapDist = {
   onLogout: userOperations.logoutUser,
};

export default connect(mapState, mapDist)(UserMenu);
