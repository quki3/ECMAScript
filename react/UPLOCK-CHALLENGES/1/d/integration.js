import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders and interacts with a button', () => {
  render(<App />);
  
  // Find the button element
  const button = screen.getByRole('button', { name: 'Click Me' });
  
  // Verify that the button is initially disabled
  expect(button).toBeDisabled();
  
  // Click the button
  userEvent.click(button);
  
  // Verify that the button is now enabled
  expect(button).toBeEnabled();
  
  // Verify that a specific text appears after clicking the button
  const outputText = screen.getByText('Button clicked!');
  expect(outputText).toBeInTheDocument();
});
