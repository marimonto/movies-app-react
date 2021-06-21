import { render, screen } from '@testing-library/react';
import DataNotFound from './index';

test('should render DataNotFound card', () => {
  render(<DataNotFound />);
  const section = screen.getByText(/no se encontró ninguna tarjeta de regalo/i)
  console.log(section);
  expect(section).toBeInTheDocument();
  expect(section).toHaveClass('warning-card');
});
