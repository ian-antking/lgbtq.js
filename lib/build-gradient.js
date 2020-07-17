export default (colors) => {
  const stripeCount = 1 / colors.length * 100;

  const colorSteps = colors.map((color, index) => {
    return `${color} ${index * stripeCount}%,${color} ${(index + 1) * stripeCount}%`}).join(',');

  return `linear-gradient(180deg,${colorSteps})`
};
