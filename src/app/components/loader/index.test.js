import { render, screen } from '@testing-library/react';
import Loader from './index';

test('should render loader button', () => {
  render(<Loader />);
  const loader = screen.getAllByTestId('loader')
  expect(loader).toBeTruthy();
});
