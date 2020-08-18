import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.h2`
  font-family: 'Lobster', cursive;
  font-size: 2.5em;
  background-color: #808080;
  padding: 8px;
  border-radius: 10px;
  border: 2px solid white;
  color: ${props => props.color};
`;

const Subtitle = ({ title, color }) => (
  <TitleContainer>
    <TitleText color={color}>
      {title}
    </TitleText>
  </TitleContainer>
);

Subtitle.defaultProps = {
  color: '#000000'
}

Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Subtitle;
