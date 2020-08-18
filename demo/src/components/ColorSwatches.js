import React from 'react';
import styled from 'styled-components';
import ColorSwatch from './ColorSwatch';

const SwatchesContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const SwatchContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 20px;
  min-width: 120px;
  justify-content: space-between;
  margin: 5px;
`;

const SwatchLabel = styled.span`
  color: #FFFFFF;
`;

const ColorSwatches = ({ colors }) => (
  <SwatchesContainer>
    {Object.keys(colors).map((color) => (
      <SwatchContainer key={`${color}-swatch`}>
        <ColorSwatch color={colors[color]} />
        <SwatchLabel>
          {color}
        </SwatchLabel>
      </SwatchContainer>
    ))}
  </SwatchesContainer>
);

export default ColorSwatches;
