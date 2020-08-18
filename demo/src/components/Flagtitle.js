import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.h2`
  font-family: 'Lobster', cursive;
  font-size: 2em;
  background-color: #808080;
  padding: 8px;
  border-radius: 10px;
  border: 2px solid white;
  color: ${props => props.color};
`;

const Flagtitle = ({ title, color }) => (
  <TitleContainer>
    <TitleText color={color}>
      {title}
    </TitleText>
  </TitleContainer>
);

Flagtitle.defaultProps = {
  color: '#000000'
}

Flagtitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Flagtitle;
