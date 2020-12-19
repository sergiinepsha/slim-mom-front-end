import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userOperations } from '../../../redux/auth';

import s from './UserMenu.module.css';

const UserMenu = ({ onLogout }) => {
   const dispatch = useDispatch();
   const isLoading = useSelector(state => state.authUser.loading);
   const { username } = useSelector(state => state.authUser.user);

   return (
      <>
         <div className={s.item}>
            {isLoading && (
               <>
                  <p className={s.name}>{username}</p>
                  <button
                     className={s.button}
                     onClick={() => dispatch(userOperations.logoutUser())}
                  >
                     Bыход
                  </button>
               </>
            )}
         </div>
      </>
   );
};

export default UserMenu;
