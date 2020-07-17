import { buildFlag }  from '../index';
import { transFlagGradient, inclusivePrideFlagGradient } from './expected';

describe('buildGradient', () => {
  it('takes a flag name and returns a css gradient', () => {
    expect(buildFlag('trans')).toBe(transFlagGradient);
    expect(buildFlag('inclusivePride')).toBe(inclusivePrideFlagGradient);
  });

  it('defaults to inclusive pride', () => {
    expect(buildFlag()).toBe(inclusivePrideFlagGradient);
  });
});
