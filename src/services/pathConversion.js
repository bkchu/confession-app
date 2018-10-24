export const getPathFromTitle = str => {
  return str
    .toLowerCase()
    .replace(/’/g, '')
    .replace(/\s/g, '-');
};
