import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';

import {
  openSideDrawer,
  setScrollStatus,
  setIsScrollingDown
} from '../../redux/reducer';
import { ReactComponent as BurgerMenu } from '../../assets/svgs/burger-menu.svg';

import styles from './header.module.scss';

const delta = 10; //how far it needs to be scrolled to be considered changed
const navbarHeight = 45; //height of navbar

class Header extends Component {
  state = {
    lastScrollTop: 0
  };

  componentDidMount() {
    setInterval(() => {
      if (this.props.didScroll) {
        const st = window.scrollY;
        if (Math.abs(this.state.lastScrollTop - st) <= delta) return;
        if (st > this.state.lastScrollTop && st > navbarHeight) {
          // Scroll Down
          this.props.setIsScrollingDown(true);
        } else {
          // Scroll Up
          // If did not scroll past the document (possible on mac)...
          if (st + window.innerHeight < document.body.clientHeight) {
            this.props.setIsScrollingDown(false);
          }
        }
        this.props.setScrollStatus(false);
        this.setState({ lastScrollTop: st });
      }
    }, 250);
  }

  render() {
    const { openSideDrawer, isScrollingDown, location, history } = this.props;

    const headerClasses = cx(
      styles.header,
      { [styles['header--hidden']]: isScrollingDown },
      { [styles['header--primary']]: location.pathname === '/' },
      { [styles['header--secondary']]: location.pathname !== '/' }
    );

    return (
      <nav className={headerClasses}>
        <h1
          onClick={() => history.push('/')}
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

const mapStateToProps = state => {
  return {
    didScroll: state.didScroll,
    isScrollingDown: state.isScrollingDown
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { openSideDrawer, setScrollStatus, setIsScrollingDown }
  )(Header)
);
