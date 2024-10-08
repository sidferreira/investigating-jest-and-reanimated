import {act, render, screen} from '@testing-library/react-native';

import React from 'react';
import {Text} from '../Text';

const testText = 'Test string';

describe('Text', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });
  afterAll(() => {
    jest.useRealTimers();
  });
  it('should render the component', async () => {
    render(<Text text={testText} />);
    expect(screen.getByText(testText)).not.toBeVisible();
    jest.advanceTimersByTime(500);
    screen.rerender(<Text text={testText} />);
    expect(screen.getByTestId('animated-view')).toHaveAnimatedStyle({
      opacity: 0.5,
    });
    screen.debug();
    expect(screen.getByText(testText)).toBeVisible();
  });
});
