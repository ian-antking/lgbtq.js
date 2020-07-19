import flags from './flags';

export default (flag = 'inclusivePride') => {
  const colors = flags[flag];
  const stripeWidth = 1 / colors.length * 100;

  const colorSteps = colors.map((color, index) => {
    return `${color} ${index * stripeWidth}%,${color} ${(index + 1) * stripeWidth}%`;
  }).join(',');

  return `linear-gradient(180deg,${colorSteps})`;
};
