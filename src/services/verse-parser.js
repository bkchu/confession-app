import ReactHtmlParser from 'react-html-parser';
import books from './bible-abbreviations';

const BibleVerseFromText = props => {
  const contents = props.children.slice();

  const regex = /(?:(\d)\s{1})?(\w+)\s{1}(\d+):(\d+)(?:-?(\d+))?/gi;
  const replacer = (match, p1, p2, p3, p4, p5, str) => {
    console.log(match);
    // match - the full match '1 John 3:16'
    // p1 - book edition ex. '1 John 3:16' => '1'
    // p2 - book ex. 'John'
    // p3 - chapter number ex. '3'
    // p4 - verse number ex. '16'
    // p5 - ending verse number, if any. ex: 'John 3:16-17' => '17'
    // str - starting index of the match

    // attempt to find corresponding abbreviation for match
    const bookAbbreviation = books[p1 ? `${p1} ${p2}` : p2];

    // if it exists
    if (bookAbbreviation) {
      //then add link to the text
      const book = bookAbbreviation && bookAbbreviation.toUpperCase(), // books['1 Corinthians'] => '1CO'
        chapter = p3,
        startingVerse = p4,
        endingVerse = p5 ? `-${p5}` : '',
        // template verse - https://www.bible.com/bible/1/2CO.13.4-5.KJV
        link = `https://www.bible.com/bible/1/${book}.${chapter}.${startingVerse}${endingVerse}.KJV`,
        aTag = `<a class="bible-verse" href="${link}" target="_blank" rel="noopener noreferrer">${match}</a>`;
      return aTag;
    } else {
      // else, just return the text as is
      return match;
    }
  };

  const inReact = ReactHtmlParser(contents.replace(regex, replacer));
  return inReact;
};

export default BibleVerseFromText;
