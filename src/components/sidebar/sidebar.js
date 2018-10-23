import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';

import { closeSideDrawer } from '../../redux/reducer';

import styles from './sidebar.module.scss';
import confession from '../../services/confession';
import { ReactComponent as BurgerCollapse } from '../../assets/svgs/burger-menu-collapse.svg';

const linkToPath = str => {
  return str
    .toLowerCase()
    .replace('’', '')
    .replace(/\s/g, '-');
};

class Sidebar extends Component {
  page = obj => (
    <NavLink
      to={`/part/${obj.part}/page/${linkToPath(obj.content)}`}
      onClick={() => this.props.closeSideDrawer()}
      key={obj.content}
      className={cx(styles.sidebar__item, styles['sidebar__item--page'])}
    >
      {obj.content}
    </NavLink>
  );
  part = obj => (
    <h3
      key={obj.content}
      className={cx(styles.sidebar__item, styles['sidebar__item--part'])}
    >
      {obj.content}
    </h3>
  );

  render() {
    const { closeSideDrawer, isOpen } = this.props;

    const contents = confession.table_of_contents.map(
      item => (item.type === 'PAGE' ? this.page(item) : this.part(item))
    );

    const sidebarBackgroundClassName = cx(styles['sidebar-background'], {
      [styles['sidebar-background--hidden']]: !isOpen
    });
    const sidebarClassName = cx(styles['sidebar'], {
      [styles['sidebar--hidden']]: !isOpen
    });

    return (
      <Fragment>
        <div
          onClick={() => closeSideDrawer()}
          className={sidebarBackgroundClassName}
        />
        <div className={sidebarClassName}>
          <div className={styles['sidebar__title-container']}>
            <h1 className={styles.sidebar__title}>Table of Contents</h1>
            <BurgerCollapse onClick={() => closeSideDrawer()} />
          </div>
          <div className={styles.sidebar__container}>{contents}</div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    isOpen: state.showSideDrawer
  };
};
export default connect(
  mapStateToProps,
  { closeSideDrawer }
)(Sidebar);
