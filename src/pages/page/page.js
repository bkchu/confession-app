import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setScrollStatus } from '../../redux/reducer';

import confession from '../../services/confession';
import { BibleVerseFromText } from '../../services/verse-parser';

import styles from './page.module.scss';
import Footer from '../../components/footer/footer';
import Error from '../error/error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Page extends Component {
  constructor() {
    super();
    this.pageDiv = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }

  componentDidUpdate() {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  title = (str, key) => (
    <h1 key={key} className={styles['page__title']}>
      {str}
    </h1>
  );

  paragraph = (str, key) => (
    <p key={key} className={styles['page__paragraph']}>
      {str}
    </p>
  );

  verse = (str, key) => (
    <p key={key} className={styles['page__verse']}>
      {str}
    </p>
  );

  subtitle = (str, key) => (
    <h2 key={key} className={styles['page__subtitle']}>
      {str}
    </h2>
  );

  subtitle2 = (str, key) => (
    <h3 key={key} className={styles['page__subtitle--2']}>
      {str}
    </h3>
  );

  onScroll = e => {
    this.props.setScrollStatus(true);
  };

  scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  render() {
    const displayPage = page => {
      return page ? (
        page.map(({ type, content }, index) => {
          const key = type + content + index;
          switch (type) {
            case 'TITLE':
              return this.title(content, key);

            case 'PARAGRAPH':
              return this.paragraph(BibleVerseFromText(content), key);

            case 'VERSE':
              return this.verse(BibleVerseFromText(content), key);

            case 'SUBTITLE':
              return this.subtitle(content, key);

            case 'SUBTITLE_2':
              return this.subtitle2(content, key);

            default:
              return content;
          }
        })
      ) : (
        <Error />
      );
    };

    const { page, part } = this.props.match.params;
    const { isOpen } = this.props;

    return (
      <div ref={this.pageDiv} className={styles.page}>
        {displayPage(confession.getPage(part, page))}
        {!isOpen && <Footer />}
        <div className={styles['page__footer']}>
          <button onClick={() => this.scrollToTop()} className={styles['page__footer-btn']}>
            Back to Top
          </button>
        </div>
      </div>
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
  { setScrollStatus }
)(Page);
