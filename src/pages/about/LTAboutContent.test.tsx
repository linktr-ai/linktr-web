import React from 'react';
import { render } from '@testing-library/react';
import LTAboutContent from './LTAboutContent';

test('renders learn react link', () => {
  const { getByText } = render(<LTAboutContent />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
