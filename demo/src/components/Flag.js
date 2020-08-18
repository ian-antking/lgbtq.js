import React from 'react';
import PropTypes from 'prop-types';
import { buildFlag } from 'lgbtq.js';
import Flagtitle from './Flagtitle';
import Card from './Card';

const Flag = ({ title, flag, opacity, background }) => (
  <Card background={buildFlag({ flag, opacity, background })}>
    <Flagtitle title={title || flag} color="#FFFFFF" />
  </Card>
);

Flag.defaultProps = {
  opacity: 1,
  background: '',
  flag: 'inclusivePride',
  title: '',
};

Flag.propTypes = {
  flag: PropTypes.string,
  opacity: PropTypes.number,
  background: PropTypes.string,
  title: PropTypes.string,
};

export default Flag;
