import flags from './flags';
import convertOpacity from './convert-opacity';

export default (flag, opacity = '') => { // eslint-disable-next-line dot-notation
  const colors = flags[flag] || flags.inclusivePride;
  const hexOpacity = opacity ? convertOpacity(opacity) : null;
  const stripeWidth = 1 / colors.length * 100;

  const colorSteps = colors.map((color, index) => {
    return `${color}${hexOpacity || opacity} ${index * stripeWidth}%,${color}${hexOpacity || opacity} ${(index + 1) * stripeWidth}%`;
  }).join(',');

  return `linear-gradient(180deg,${colorSteps})`;
};
