import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FrontButton from './FrontButton';

test('renders front button', () => {
  render(<FrontButton />);
  const frontButton = screen.getByText('Front');
  expect(frontButton).toBeInTheDocument();
});

test('clicking front button triggers the onClick event', () => {
  // jest.fn() - is a function provided by the Jest testing framework. It is used to create a mock function, which allows you to simulate and control the behavior of a function during testing.
  const onClickMock = jest.fn();
  render(<FrontButton onClick={onClickMock} />);
  const frontButton = screen.getByText('Front');
  fireEvent.click(frontButton);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
