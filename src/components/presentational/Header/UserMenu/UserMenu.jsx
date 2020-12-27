import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../Loader';
import { userOperations } from '../../../../redux/auth';

import s from './UserMenu.module.css';

const UserMenu = ({ onLogout }) => {
   const dispatch = useDispatch();
   const isAuth = useSelector(state => state.authUser.accessToken);
   const { name } = useSelector(state => state.authUser.user);
   const loader = useSelector(state => state.loader);
   return (
      <>
         {loader && <Loader />}
         {isAuth && (
            <div className={s.item}>
               <>
                  <p className={s.name}>{name}</p>
                  <button
                     className={s.button}
                     onClick={() => dispatch(userOperations.logoutUser())}
                  >
                     Bыход
                  </button>
               </>
            </div>
         )}
      </>
   );
};

export default UserMenu;
