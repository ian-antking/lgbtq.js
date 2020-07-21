import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import randomFlag from '../helpers/random-flag';

const Container = styled.div`
  height: 50vh;
  background: ${props => props.background || 'red'};
`

const HeroImage = () => {
  const [ flag, setFlag ] = useState(randomFlag());

  useEffect(() => {
    const changeFlag = window.setInterval(() => setFlag(randomFlag()), 5000)
    return () => window.clearInterval(changeFlag);
  })

  return (
    <Container  background={flag}/>
  )
};

export default HeroImage;