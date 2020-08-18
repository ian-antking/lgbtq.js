import React from 'react';
import Flag from './Flag';

const opacities = [ 1, 0.5, 0.1 ];

const FlagOpacity = () => (
  <>
    {opacities.map((opacity) => <Flag key={`opacity-${opacity}-flag`} title={`${opacity}`} opacity={opacity} />)}
  </>
);

export default FlagOpacity;