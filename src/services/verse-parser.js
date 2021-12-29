import ReactHtmlParser from "react-html-parser";
import books from "./bible-abbreviations";

export const VERSIONS = {
  AMPC: 8,
  ESV: 59,
  KJV: 1,
  NKJV: 114,
  TPT: 1849,
};

/**
 *
 * @param {string} str
 * @param {'NKJV' | 'KJV' | 'ESV'} version
 * @returns
 */
export const BibleVerseFromText = (str, version = "NKJV") => {
  const contents = str.slice();

  const regex = /(?:(\d)\s{1})?(\w+)\s{1}(\d+):(\d+)(?:-?(\d+))?/gi;
  const replacer = (match, p1, p2, p3, p4, p5, str) => {
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
        endingVerse = p5 ? `-${p5}` : "",
        // KJV - template verse - https://www.bible.com/bible/1/2CO.13.4-5.KJV
        // NKJV - template verse - https://www.bible.com/bible/114/2CO.13.4-5.NKJV
        // ESV - template verse - https://www.bible.com/bible/59/2CO.13.4-5.ESV
        link = `https://www.bible.com/bible/${
          VERSIONS[version]
        }/${book}.${chapter}.${startingVerse}${endingVerse}.${version}`,
        aTag = `<a style="text-decoration: none; color: #777777;" href="${link}" target="_blank" rel="noopener noreferrer">${match}</a>`;
      return aTag;
    } else {
      // else, just return the text as is
      return match;
    }
  };

  const inReact = ReactHtmlParser(contents.replace(regex, replacer));
  return inReact;
};
