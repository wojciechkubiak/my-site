import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<Navbar />);
    const navbar = getByTestId('Navbar');

    expect(navbar).toBeInTheDocument();
  });
});