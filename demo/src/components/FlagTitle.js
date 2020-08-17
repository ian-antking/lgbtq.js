import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleContainer = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleText = styled.h2`
  font-family: 'Lobster', cursive;
  font-size: 3em;
  -webkit-text-stroke: 1px #4d4d4d;
`;

const FlagTitle = ({ title }) => (
  <TitleContainer>
    <TitleText>
      {title}
    </TitleText>
  </TitleContainer>
);

FlagTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default FlagTitle;
