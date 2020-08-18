import React from 'react';
import { buildFlag } from 'lgbtq.js'
import Card from './Card';

import image from '../content/images/200.jpeg'

const backgrounds = [ image ];

const FlagOpacity = () => (
  <>
    {backgrounds.map((background) => (
      <Card key={`background-${background}-flag`} opacity={0.5} background={buildFlag({opacity: 0.4, background})} />
    ))}
  </>
);

export default FlagOpacity;