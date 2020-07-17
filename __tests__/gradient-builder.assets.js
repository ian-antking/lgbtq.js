import  { buildGradient }  from '../index';
import { transFlagGradient, inclusivePrideFlagGradient } from './expected';

describe('buildGradient', () => {
  it('takes a flag name and returns a css gradient', () => {
    expect(buildGradient('trans')).toBe(transFlagGradient);
    expect(buildGradient('inclusivePride')).toBe(inclusivePrideFlagGradient);
  });
});
