import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './index';


describe('Input component tests', () => {
  const props = {
    handleChange: jest.fn(),
    type: 'text',
    name: 'name',
    value: null,
    title: 'label'
  }
 
  test('should render Input component', () => {
    render(<Input {...props} />);
    const label = screen.getByText(props.title);
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('label');
    expect(label).toHaveTextContent(props.title);

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument();
    expect(input).not.toHaveValue();
  });

  test('should render with walue', () => {
    props.value = 'value'
    render(<Input {...props} />);
    const input = screen.getByRole('textbox')
    expect(input).toHaveValue('value');
  });

  test('should call onChange', () => {
    render(<Input {...props} />);
    const input = screen.getByRole('textbox')
    expect(props.handleChange).toBeCalledTimes(0);
    userEvent.type(input, 'v');
    expect(props.handleChange).toBeCalledTimes(1);
  });
})
