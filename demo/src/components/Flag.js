import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlagTitle from './FlagTitle';
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
`

const Flag = ({ flag }) => (
  <FlagContainer flag={buildFlag({flag})}>
    <FlagTitle title={flag} />
  </FlagContainer>
);

Flag.propTypes = {
  flag: PropTypes.string.isRequired,
}

export default Flag;
