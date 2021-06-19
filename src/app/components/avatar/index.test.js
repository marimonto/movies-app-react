import { render, screen } from '@testing-library/react';
import Avatar from './index';

test('should render avatar button', () => {
  render(<Avatar />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
