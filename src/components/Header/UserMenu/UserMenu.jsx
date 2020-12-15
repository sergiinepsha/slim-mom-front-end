import React from 'react';
import { connect } from 'react-redux';

import { userSelector, userOperations } from '../../../redux/auth';

const UserMenu = ({ avatar, name, onLogout, isloading }) => (
  <>
    {!isloading && (
      <div>
        <img src={avatar} alt="1" width="32" />
        <span>Welcom,{name}</span>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </div>
    )}
  </>
);

const mapState = state => ({
  isloading: userSelector.isloading(state),
  name: userSelector.getUserName(state),
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg',
});

const mapDist = {
  onLogout: userOperations.logoutUser,
};
export default connect(mapState, mapDist)(UserMenu);
