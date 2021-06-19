import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './index';


describe('dropdown component tests', () => {
  const props = {
    handleClick: jest.fn(),
    className: 'class',
    text: 'text'
  }
  beforeEach(() => {
    render(<Button {...props}/>);
  });
    
  test('should render dropdown', () => {
    const dropdownOption = screen.getByTestId('logoutOption');
    expect(dropdownOption).toBeInTheDocument();
    expect(dropdownOption).toHaveClass('dropdown-option');
    expect(dropdownOption).toHaveTextContent('Cerrar sesión');
  });

  test('should call handleClick', () => {
    const dropdownOption = screen.getByTestId('logoutOption');
    expect(props.handleClick).toBeCalledTimes(0);
    userEvent.click(dropdownOption);
    expect(props.handleClick).toBeCalledTimes(1);
  });
})
