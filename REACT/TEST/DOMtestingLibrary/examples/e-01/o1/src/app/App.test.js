import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('save to reload', () => {
  render(<App />);
  const t2 = screen.getByText(/and save to reload/i);
  expect(t2).toBeInTheDocument();
});

