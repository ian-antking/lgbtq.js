/**
 * @private
 * @param {number} decimal - The decimal to convert to hex. 
 * @returns {string} - hex value.
 */
const convertOpacity = (decimal) => {
  const alpha = Math.round(decimal * 255);
  const hex = (alpha + 0x10000).toString(16).substr(-2);
  return hex;
};

export default convertOpacity;
