import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { userSelector } from '../../redux/auth';

const Navigation = ({ isAuth }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to={`/`}
            className="link"
            activeClassName="active-link"
          >
            Home
          </NavLink>
        </li>

        {isAuth && (
          <>
            <li>
              <NavLink
                exact
                to={`/contacts`}
                className="link"
                activeClassName="active-link"
              >
                Phone
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
const mapStateToProps = state => ({
  isAuth: userSelector.isAuth(state),
});

export default connect(mapStateToProps)(Navigation);
