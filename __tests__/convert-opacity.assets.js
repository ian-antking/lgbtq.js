import convertOpacity from '../lib/convert-opacity';

describe('convertOpacyt', () => {
  it('converts a decimal number into a hex vulue', () => {
    expect(convertOpacity(1)).toBe('ff');
    expect(convertOpacity(0.75)).toBe('bf');
    expect(convertOpacity(0.5)).toBe('80');
    expect(convertOpacity(0.25)).toBe('40');
    expect(convertOpacity(0)).toBe('00');
  });
});
