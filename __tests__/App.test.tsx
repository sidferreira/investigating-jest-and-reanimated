import React from 'react';
import '@testing-library/jest-native';
import { render, screen } from '@testing-library/react-native';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
// import } from '@jest/globals';

it('renders correctly', () => {
  render(<App />);

  expect(screen.getByTestId('safe-area-view')).toBeDefined();
  expect(screen.getByTestId('safe-area-view')).toBeVisible();
});
