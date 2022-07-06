import React from 'react';
import { render, screen } from '@testing-library/react';
import SpaceTestApp from './SpaceTestApp';

test('renders learn react link', () => {
  render(<SpaceTestApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
