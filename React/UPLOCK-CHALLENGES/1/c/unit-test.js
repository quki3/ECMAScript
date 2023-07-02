import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FrontButton from './FrontButton';

test('renders front button', () => {
  render(<FrontButton />);
  const frontButton = screen.getByText('Front');
  expect(frontButton).toBeInTheDocument();
});

test('clicking front button triggers the onClick event', () => {
  const onClickMock = jest.fn();
  render(<FrontButton onClick={onClickMock} />);
  const frontButton = screen.getByText('Front');
  fireEvent.click(frontButton);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
