import React, { useState, useEffect } from 'react';
import LazyHero from 'react-lazy-hero';
import randomFlag from '../helpers/random-flag';
import Logo from './logo';

const HeroImage = () => {
  const [ flag, setFlag ] = useState(randomFlag());

  useEffect(() => {
    const changeFlag = window.setInterval(() => setFlag(randomFlag()), 10000)
    return () => window.clearInterval(changeFlag);
  })

  return (
    <LazyHero
      imageSrc=""
      opacity={0.5}
      style={{
        background: flag,
      }}
    >
      <Logo />
    </LazyHero>
  )
};

export default HeroImage;