import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import randomFlag from '../helpers/random-flag';
import Logo from './Logo';

const Container = styled.div`
  width: 100vw;
  height: 50vh;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImage = () => {
  const [flag, setFlag] = useState(randomFlag());

  useEffect(() => {
    const changeFlag = window.setInterval(() => setFlag(randomFlag()), 10000);
    return () => window.clearInterval(changeFlag);
  });

  return (
    <Container background={flag}>
      <Logo />
    </Container>
  );
};

export default HeroImage;
