/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */

const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const lowerLettersSplit = lowerLetters.split('');
const upperLetters = lowerLetters.toUpperCase();
const upperLettersSplit = upperLetters.split('');

const pushEncryptedLetter = (letter, alphabetType, key, type, result) => {
  for (let k = 0; k < alphabetType.length; k += 1) {
    let indexToPush = 0;
    if (letter === alphabetType[k]) {
      if (type === 'encrypt') {
        indexToPush = k + key;
        const withinRange = alphabetType[indexToPush];
        const outOfRange = alphabetType[indexToPush - 26];
        indexToPush <= 26 ? result.push(withinRange) : result.push(outOfRange);
      } else {
        indexToPush = k - key;
        const withinRange = alphabetType[indexToPush];
        const outOfRange = alphabetType[indexToPush + 26];
        indexToPush >= 1 ? result.push(withinRange) : result.push(outOfRange);
      }
    }
  }
  return result;
};

function cipher(string, key, type) {
  const result = [];
  const stringSplit = string.split('');
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (lowerLettersSplit.indexOf(stringSplit[i]) === -1) {
      if (upperLettersSplit.indexOf(stringSplit[i]) === -1) {
        result.push(stringSplit[i]);
      } else {
        const argArray = [stringSplit[i], upperLettersSplit, key, type, result];
        pushEncryptedLetter(...argArray);
      }
    } else {
      const argArray = [stringSplit[i], lowerLettersSplit, key, type, result];
      pushEncryptedLetter(...argArray);
    }
  }
  return result.join('');
}

module.exports = cipher;
