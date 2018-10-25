import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';

import { openSideDrawer } from '../../redux/reducer';
import { ReactComponent as BurgerMenu } from '../../assets/svgs/burger-menu.svg';

import styles from './header.module.scss';

class Header extends Component {
  render() {
    const { openSideDrawer } = this.props;

    const headerColorClass = cx(
      styles.header,
      { [styles['header--primary']]: this.props.location.pathname === '/' },
      { [styles['header--secondary']]: this.props.location.pathname !== '/' }
    );

    return (
      <nav className={headerColorClass}>
        <h1
          onClick={() => this.props.history.push('/')}
          className={styles.header__brandname}
        >
          CONFESS
        </h1>
        <BurgerMenu
          style={{ cursor: 'pointer' }}
          onClick={() => openSideDrawer()}
        />
      </nav>
    );
  }
}
export default withRouter(
  connect(
    null,
    { openSideDrawer }
  )(Header)
);
