import React from 'react';
import { render } from '@testing-library/react';
import CardContainer from '../components/CardContainer';

describe('Card', () => {
  it('renders the correct snapshot', () => {
    const { asFragment } = render(<CardContainer />);
    
    expect(asFragment()).toMatchSnapshot();
  })
})