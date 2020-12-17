import React from 'react';
import { connect } from 'react-redux';

import { userSelector, userOperations } from '../../../redux/auth';
import s from './UserMenu.module.css';

const UserMenu = ({ name, onLogout, isloading }) => {
   return (
      <>
         <div className={s.item}>
            {isloading && (
               <>
                  <p className={s.name}>Nic</p>
                  <button className={s.button}>Bыход</button>
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

// const UserMenu = ({ name, onLogout, isloading }) => (
//    <>
//       {!isloading && (
//          <div>
//             <span>{name}</span>
//             <button type="button" onClick={onLogout}>
//                Logout
//             </button>
//          </div>
//       )}
//    </>
// );
