import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openSideDrawer } from '../../redux/reducer';
import styles from './landing.module.scss';

class Landing extends Component {
  render() {
    const { openSideDrawer } = this.props;

    return (
      <div className={styles.landing}>
        <h1 className={styles.landing__title}>New Creation Realities</h1>
        <p className={styles.landing__quote}>
          “Death and life are in the power of the tongue.”
        </p>
        <button
          onClick={() => openSideDrawer()}
          className={styles.landing__cta}
        >
          Start Confessing
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { openSideDrawer }
)(Landing);
