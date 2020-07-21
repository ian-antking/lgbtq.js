export default (decimal) => {
  const alpha = Math.round(decimal * 255);
  const hex = (alpha + 0x10000).toString(16).substr(-2);
  return hex;
};
