import React from 'react';
import styled from 'styled-components';
import { flags } from 'lgbtq.js';

const Container = styled.div`
  width: 250px;
  height: 200px;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #333333;
  border-radius: 5pt;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
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
  color: #EBEBEB;
  font-size: 1.2em;
`

const Logo = () => {
  const logoText = 'lgbtq.js'.split('')
  console.log(logoText)
  return (
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
        Colors and Gradients for Web Applications
      </LogoCaption>
    </Container>
  )
}

export default Logo
