import { fireEvent, render, screen } from '@testing-library/react';
import Select from './index';


describe('Select component tests', () => {
  const props = {
    handleChange: jest.fn(),
    type: 'text',
    name: 'name',
    value: 'a',
    title: 'title',
    options: ['a', 'b', 'c']
  }
 
  it('should render Select component', () => {
    render(<Select {...props} />);
    const label = screen.getByText(props.title);
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('label');
    expect(label).toHaveTextContent(props.title);

    const select = screen.getByRole('combobox', {name: /title/i})
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue('a');
  });


  it('should call onChange', () => {
    render(<Select {...props} />);
    const select = screen.getByRole('combobox', { name: /title/i })
    expect(props.handleChange).toBeCalledTimes(0);
    fireEvent.change(select, {
      target: { value: "b" },
    });
    expect(props.handleChange).toBeCalledTimes(1);
  });
})
