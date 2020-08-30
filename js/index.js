const capitalizeString = str => {
  const firstLetter = str.charAt(0).toUpperCase();
  const otherLetters = str.slice(1);
  return firstLetter + otherLetters;
};

module.exports = capitalizeString;
