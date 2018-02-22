
/**
 * Returns index of the last specified character occurrence in the specified string,
 * or -1 in all other cases. The first string character is not matched.
 *
 * @param {string} string
 * @param {...char} chars
 *
 * @return {number}
 */
module.exports = function getLastIndexOfChars (string, ...chars) {

  if ('string' !== typeof string || '' === string || 0 === chars.length) {
    return -1;
  }

  // Finding last index of each specified character in the string.
  const indices = chars.map(char => string.lastIndexOf(char));

  // Finding the maximum index.
  const result = Math.max(...indices);

  // @todo: should we really skip the first character?
  return (result > 0 ? result : -1);

};
