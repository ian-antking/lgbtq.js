import React from 'react';
import styled from 'styled-components';
import { flags } from 'lgbtq.js';

const logoText = 'lgbtq.js'.split('');

const Container = styled.div`
  width: 250px;
  height: 200px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #333333;
  border-radius: 5pt;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
`

const LogoText = styled.div`
  font-family: 'Lobster', cursive;
  font-size: 7em;
`

const LogoLetter = styled.span`
  color: ${(props) => props.color};
  -webkit-text-stroke: 2px #EBEBEB;
`

const LogoCaption = styled.span`
  text-align: center;
  width: 100%;
  color: #EBEBEB;
  font-weight: bold;
  font-size: 0.9em;
`

const Logo = () => (
  <Container>
    <LogoText>
    {logoText.map((letter, index) => {
      const color = flags.inclusivePride[index]
      return (
        <LogoLetter 
          key={color + index}
          color={color}
        >
          {letter}
        </LogoLetter>
      )
    })}
    </LogoText>
    <LogoCaption>
      Colors and Flags for Web Apps
    </LogoCaption>
  </Container>
)

export default Logo
