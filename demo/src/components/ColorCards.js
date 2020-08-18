import React from 'react';
import Card from './Card';
import ColorSwatches from './ColorSwatches';
import { colors } from 'lgbtq.js';

const ColorCards = () => (
  <>
    {Object.keys(colors).sort().map(colorSet => (
      <Card key={`${colorSet}-card`}>
        <h2>
          {colorSet}
        </h2>
        <ColorSwatches colors={colors[colorSet]} />
      </Card>
    ))}
  </>
)

export default ColorCards;
