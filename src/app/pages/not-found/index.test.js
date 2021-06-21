import { render } from '@testing-library/react';
import NotFound from './index';


test('should render NotFound page', () => {
  const { container } = render(<NotFound />)
  const erroContainer = container.querySelector('div > div ')
  expect(erroContainer).toBeInTheDocument();
  expect(erroContainer).toHaveClass('error-container');
  expect(erroContainer).toHaveTextContent('Error 404')
  expect(erroContainer).toHaveTextContent('Lo sentimos, pero la página que busca no existe')
});
