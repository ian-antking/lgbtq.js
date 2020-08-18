import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import ColorSwatches from './ColorSwatches';
import { colors } from 'lgbtq.js';

const Title = styled.span`
  color: #FFFFFF;
  font-size: 2em;
`;

const ColorCards = () => (
  <>
    {Object.keys(colors).sort().map(colorSet => (
      <Card>
        <Title>
          {colorSet}
        </Title>
        <ColorSwatches colors={colors[colorSet]} />
      </Card>
    ))}
  </>
)

export default ColorCards;
