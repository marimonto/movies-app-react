import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './index';


describe('Dropdown component tests', () => {
  const props = {
    handleClick: jest.fn(),
    className: 'class',
    text: 'text'
  }
  beforeEach(() => {
    render(<Dropdown {...props}/>);
  });
    
  test('should render button component', () => {
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass(props.className);
    expect(buttonElement).toHaveTextContent(props.text);
  });

  test('should call handleClick', () => {
    const buttonElement = screen.getByRole('button');
    expect(props.handleClick).toBeCalledTimes(0);
    userEvent.click(buttonElement);
    expect(props.handleClick).toBeCalledTimes(1);
  });
})
