import flags from './flags';
import convertOpacity from './convert-opacity';

/**
 * @public
 * @param {object} [options] - Configuration for the flag to render.
 * @param {string} [options.flag] - The name of the flag to render. 
 * @param {string} [options.background] - URL of image to render underneath flag.
 * @param {number} [options.opacity] - Opacity of flag as float between 0 and 1.
 * @returns {string} - CSS gradient string.
 */
const buildFlag = ({ flag, background, opacity = '' }) => { // eslint-disable-next-line dot-notation
  const colors = flags[flag] || flags.inclusivePride;
  const hexOpacity = opacity ? convertOpacity(opacity) : null;
  const backgroundUrl = background ? `, url(${background})` : '';
  const stripeWidth = 1 / colors.length * 100;

  const colorSteps = colors.map((color, index) => {
    return `${color}${hexOpacity || opacity} ${index * stripeWidth}%,${color}${hexOpacity || opacity} ${(index + 1) * stripeWidth}%`;
  }).join(',');

  return `linear-gradient(180deg,${colorSteps})${backgroundUrl}`;
};

export default buildFlag;
