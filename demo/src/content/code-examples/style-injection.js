export default `
import React from 'react';
import { buildFlag } from 'lgbtq.js';

const PrideFlag = {
  background: buildFlag({flag: 'pride'}),
  width: '500px',
  height: '300px'
};

return (
  <div style={prideFlag}></div>
);

export default PrideFlag
`;
