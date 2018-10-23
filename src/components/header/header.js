import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openSideDrawer } from '../../redux/reducer';
import { ReactComponent as BurgerMenu } from '../../assets/svgs/burger-menu.svg';
import styles from './header.module.scss';

class Header extends Component {
  render() {
    const { openSideDrawer } = this.props;
    return (
      <nav className={styles.header}>
        <h1 className={styles.header__brandname}>CONFESS</h1>
        <BurgerMenu onClick={() => openSideDrawer()} />
      </nav>
    );
  }
}

export default connect(
  null,
  { openSideDrawer }
)(Header);
