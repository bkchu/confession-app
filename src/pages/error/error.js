import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './error.module.scss';
const Error = props => {
  return (
    <div className={styles['error']}>
      <div className={styles['error__container']}>
        <p>This page doesn't exist.</p>
        <button onClick={() => props.history.push('/')}>Go back.</button>
      </div>
    </div>
  );
};

export default withRouter(Error);
