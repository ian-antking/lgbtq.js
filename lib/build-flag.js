import flags from './flags';

export default (flag, opacity = '') => {
  const colors = flags[flag] || flags['inclusivePride'];
  const stripeWidth = 1 / colors.length * 100;

  const colorSteps = colors.map((color, index) => {
    return `${color}${opacity} ${index * stripeWidth}%,${color} ${(index + 1) * stripeWidth}%`;
  }).join(',');

  return `linear-gradient(180deg,${colorSteps})`;
};
