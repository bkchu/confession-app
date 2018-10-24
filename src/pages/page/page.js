import React, { Component } from 'react';
import confession from '../../services/confession';
import { BibleVerseFromText } from '../../services/verse-parser';

import styles from './page.module.scss';

class Page extends Component {
  constructor() {
    super();
    this.pageDiv = React.createRef();
  }
  componentDidMount() {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      this.pageDiv.current.scrollTop = 0;
    });
  }
  componentDidUpdate() {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      this.pageDiv.current.scrollTop = 0;
    });
  }

  title = (str, key) => (
    <h1 key={key} className={styles.page__title}>
      {str}
    </h1>
  );
  paragraph = (str, key) => (
    <p key={key} className={styles.page__paragraph}>
      {str}
    </p>
  );
  verse = (str, key) => (
    <p key={key} className={styles.page__verse}>
      {str}
    </p>
  );
  subtitle = (str, key) => (
    <h2 key={key} className={styles.page__subtitle}>
      {str}
    </h2>
  );

  subtitle2 = (str, key) => (
    <h3 key={key} className={styles['page__subtitle--2']}>
      {str}
    </h3>
  );

  render() {
    const displayPage = page =>
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
      });
    const { page, part } = this.props.match.params;

    return (
      <div ref={this.pageDiv} className={styles.page}>
        {displayPage(confession.getPage(part, page))}
      </div>
    );
  }
}

export default Page;
