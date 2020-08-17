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
  font-size: 3em;
  -webkit-text-stroke: 1px #808080;
  color: ${props => props.color};
`;

const FlagTitle = ({ title, color }) => (
  <TitleContainer>
    <TitleText color={color}>
      {title}
    </TitleText>
  </TitleContainer>
);

FlagTitle.defaultProps = {
  color: '#000000'
}

FlagTitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default FlagTitle;
