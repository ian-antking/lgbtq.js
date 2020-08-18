import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import Card from './Card';
import { buildFlag } from 'lgbtq.js';

const Flag = ({ flag }) => (
  <Card flag={buildFlag({flag})}>
    <Subtitle title={flag} color="#FFFFFF" />
  </Card>
);

Flag.propTypes = {
  flag: PropTypes.string.isRequired,
}

export default Flag;
