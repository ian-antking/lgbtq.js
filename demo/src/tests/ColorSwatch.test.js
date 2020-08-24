import React from 'react';
import { render } from '@testing-library/react';
import ColorSwatch from '../components/ColorSwatch';

describe('Card', () => {
  it('renders the correct snapshot', () => {
    const { asFragment } = render(<ColorSwatch  color="red" />);
    
    expect(asFragment()).toMatchSnapshot();
  })

  it('renders the correct color', () => {
    const { getByTestId } = render(<ColorSwatch data-testid="test-swatch" color="red" />);

    expect(getByTestId('test-swatch')).toHaveStyle('background-color: red');
  })
})