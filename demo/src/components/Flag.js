import React from 'react';
import PropTypes from 'prop-types';
import { buildFlag } from 'lgbtq.js';
import Flagtitle from './Flagtitle';
import Card from './Card';

const Flag = ({ flag, opacity, background }) => (
  <Card flag={buildFlag({ flag, opacity, background })}>
    <Flagtitle title={flag} color="#FFFFFF" />
  </Card>
);

Flag.defaultProps = {
  opacity: 1,
  background: '',
};

Flag.propTypes = {
  flag: PropTypes.string.isRequired,
  opacity: PropTypes.number,
  background: PropTypes.string,
};

export default Flag;
