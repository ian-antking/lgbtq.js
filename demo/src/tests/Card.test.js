import React from 'react';
import { render } from '@testing-library/react';
import Card from '../components/Card';

describe('Card', () => {
  it('renders the correct snapshot', () => {
    const { asFragment } = render(<Card />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('renders the correct background', () => {
    const { getByTestId } = render(<Card data-testid="test-card" background="red" />);

    expect(getByTestId('test-card')).toHaveStyle('background: red');
  })
})