import  { buildGradient }  from '../index';

describe('buildGradient', () => {
  it('returns a css gradient', () => {
    const colors = [
      '#55cdfc',
      '#f7a8b8',
      '#ffffff',
      '#f7a8b8',
      '#55cdfc',
    ]
    const expected = `
      linear-gradient(
        180deg,
        #55cdfc 0%,
        #55cdfc 20%,
        #f7a8b8 20%,
        #f7a8b8 40%,
        #ffffff 40%,
        #ffffff 60%,
        #f7a8b8 60%,
        #f7a8b8 80%,
        #55cdfc 80%,
        #55cdfc 100%
        )
    `
    expected(buildGradient(colors)).toBe(expected)
  });
});
