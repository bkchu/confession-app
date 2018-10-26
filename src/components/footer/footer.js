import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';

import confession from '../../services/confession';
import styles from './footer.module.scss';
import { getPathFromTitle } from '../../services/pathConversion';

class Footer extends Component {
  state = {
    lastScrollTop: 0
  };

  getCurrentPageNum() {
    const { page } = this.props.match.params;
    const currentPageNum = confession.tableOfContents.find(
      ({ content }) => getPathFromTitle(content) === page
    ).page;
    return currentPageNum;
  }

  getPageObjFromPageNumber(pageNum) {
    return confession.tableOfContents.find(({ page }) => page === pageNum);
  }

  getNextPage() {
    let nextPage = '';
    let currentPageNum = this.getCurrentPageNum();
    if (this.getCurrentPageNum() === confession.totalNumberOfPages) {
      nextPage = this.getPageObjFromPageNumber(1);
    } else {
      nextPage = this.getPageObjFromPageNumber(currentPageNum + 1);
    }
    return nextPage;
  }

  getPreviousPage() {
    let previousPage = '';
    let currentPageNum = this.getCurrentPageNum();
    if (this.getCurrentPageNum() === 1) {
      previousPage = this.getPageObjFromPageNumber(
        confession.totalNumberOfPages
      );
    } else {
      previousPage = this.getPageObjFromPageNumber(currentPageNum - 1);
    }
    return previousPage;
  }

  routeToNewPage(direction = 'next') {
    if (direction === 'next') {
      const { part, content } = this.getNextPage();
      this.props.history.push(
        `/part/${part}/page/${getPathFromTitle(content)}`
      );
    } else {
      const { part, content } = this.getPreviousPage();
      this.props.history.push(
        `/part/${part}/page/${getPathFromTitle(content)}`
      );
    }
  }

  render() {
    const footerClassNames = cx(styles['footer'], {
      [styles['footer--hidden']]: this.props.isScrollingDown
    });

    return (
      <div className={footerClassNames}>
        <button
          onClick={() => this.routeToNewPage('previous')}
          className={styles['footer__button']}
        >
          {'<'}
        </button>
        <button
          onClick={() => this.routeToNewPage('next')}
          className={styles['footer__button']}
        >
          {'>'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    didScroll: state.didScroll,
    isScrollingDown: state.isScrollingDown
  };
};

export default withRouter(connect(mapStateToProps)(Footer));
