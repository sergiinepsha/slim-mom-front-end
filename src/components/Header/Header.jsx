import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from '../views/Navigation';
import { userSelector } from '../../redux/auth';

import UserMenu from './UserMenu/UserMenu';
import AuthNav from './AuthNav/AuthNav';
import Logo from './Logo/Logo';

import styles from './Header.module.css';

class App extends Component {
  render() {
    const { isAuth } = this.props;
    return (
      <header className={styles.nav}>
        <Logo />
        <Navigation />
        {isAuth ? <UserMenu /> : <AuthNav />}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: userSelector.isAuth(state),
});

export default connect(mapStateToProps)(App);
