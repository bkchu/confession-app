import ReactHtmlParser from 'react-html-parser';
import books from './bible-abbreviations';

const BibleVerseFromText = props => {
  const contents = props.children.slice();

  const regex = /(?:(\d)\s{1})?(\w+)\s{1}(\d+):(\d+)(?:-?(\d+))?/gi;
  const replacer = (match, p1, p2, p3, p4, p5, str) => {
    // match - the full match '1 John 3:16'
    // p1 - book edition ex. '1 John 3:16' => '1'
    // p2 - book ex. 'John'
    // p3 - chapter number ex. '3'
    // p4 - verse number ex. '16'
    // p5 - ending verse number, if any. ex: 'John 3:16-17' => '17'
    // str - starting index of the match
    const book = books[p1 ? `${p1} ${p2}` : p2].toUpperCase(),
      chapter = p3,
      startingVerse = p4,
      endingVerse = p5 ? `-${p5}` : '',
      // template verse - https://www.bible.com/bible/1/2CO.13.4-5.KJV
      link = `https://www.bible.com/bible/1/${book}.${chapter}.${startingVerse}${endingVerse}.KJV`,
      aTag = `<a href="${link}" target="_blank" rel="noopener noreferrer">${match}</a>`;
    return aTag;
  };

  return ReactHtmlParser(contents.replace(regex, replacer));
};

export default BibleVerseFromText;
