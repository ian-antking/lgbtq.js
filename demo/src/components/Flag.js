import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Subtitle from './Subtitle';
import { buildFlag } from 'lgbtq.js';

const FlagContainer = styled.div`
  width: 300px;
  height: 200px;
  background: ${props => props.flag};
  border-radius: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
`

const Flag = ({ flag }) => (
  <FlagContainer flag={buildFlag({flag})}>
    <Subtitle title={flag} color="#FFFFFF" />
  </FlagContainer>
);

Flag.propTypes = {
  flag: PropTypes.string.isRequired,
}

export default Flag;
