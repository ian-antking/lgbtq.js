import React from 'react';
import Flag from './Flag';
import { flags } from 'lgbtq.js';

const Flags = () => (
  <>
    {Object.keys(flags).sort().map(flag => <Flag key={`${flag}-flag`} flag={flag} />)}
  </>
)

export default Flags
