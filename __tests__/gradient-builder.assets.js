import  { buildGradient }  from '../index';
import { transFlagGradient, prideFlagGradient } from './expected';

describe('buildGradient', () => {
  it('returns a css gradient', () => {
    const colors = [
      '#55cdfc',
      '#f7a8b8',
      '#ffffff',
      '#f7a8b8',
      '#55cdfc',
    ];
    const expected = transFlagGradient;

    expect(buildGradient(colors)).toBe(expected)
  });

  it('can handle different numbers of stripes', () => {
    const colors = [
      '#000000',
      '#784F0C',
      '#E70000',
      '#FF8C00',
      '#FFEF00',
      '#00811F',
      '#0044FF',
      '#760089',
    ];
    const expected = prideFlagGradient;

    expect(buildGradient(colors)).toBe(prideFlagGradient);
  });
});
