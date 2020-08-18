import React from 'react';
import { flags } from 'lgbtq.js';
import Flag from './Flag';

const Flags = () => (
  <>
    {Object.keys(flags).sort().map((flag) => <Flag key={`${flag}-flag`} flag={flag} />)}
  </>
);

export default Flags;
