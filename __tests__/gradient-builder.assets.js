import  { buildGradient, flags }  from '../index';
import transFlagGradient from './trans-flag-gradient';

describe('buildGradient', () => {
  it('returns a css gradient', () => {
    const colors = [
      '#55cdfc',
      '#f7a8b8',
      '#ffffff',
      '#f7a8b8',
      '#55cdfc',
    ]
    const expected = transFlagGradient;

    expect(buildGradient(colors)).toBe(expected)
  });
});
