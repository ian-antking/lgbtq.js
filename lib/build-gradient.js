export default (colors) => {
  const gradientStart = `linear-gradient(180deg,`;
  const gradientEnd = `)`;

  const stripes = 1 / colors.length * 100;

  const colorSteps = colors.map((color, index) => {
    return `${color} ${index * stripes}%,${color} ${(index + 1) * stripes}%`}).join(',');


  return `${gradientStart}${colorSteps}${gradientEnd}`
};
