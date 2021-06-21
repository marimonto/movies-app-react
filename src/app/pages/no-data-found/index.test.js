import { render, screen } from '@testing-library/react';
import DataNotFound from './index';

test('should render DataNotFound card', () => {
  render(<DataNotFound />);
  const section = screen.getByText(/no se encontró ninguna tarjeta de regalo/i)
  expect(section).toBeInTheDocument();
  expect(section).toHaveClass('warning-card');
});
