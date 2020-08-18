export default `
import React from 'react';
import styled from 'styled-components'
import { buildFlag } from 'lgbtq.js'

const FlagContainer = styled.div\`
  width: 500px;
  height: 300px;
  background: \${props => buildFlag({ flag: props.flag })};
  margin: 10px;
\`

const Flag = ({ flag }) => (
  <FlagContainer flag={flag} />
)

export default Flag
`;
