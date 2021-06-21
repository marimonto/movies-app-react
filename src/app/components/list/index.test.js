import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './index';


describe('dropdown component tests', () => {
  let component;
  const props = {
    list: [{ col1: 1, col2: 2 }, { col1: 3, col2: 4 }],
    headers: ['col1', 'col2'],
    actions: null,
    handleActionClick: jest.fn(),
    className: 'class',
  }
  beforeEach(() => {
    component = <List {...props}/>
  });
    
  it('should render List without actions', () => {
    render(component)
    expect(screen.getByText(props.headers[0])).toBeInTheDocument();
    expect(screen.getByText(props.headers[1])).toBeInTheDocument();
    expect(screen.getByText(props.list[0].col1)).toBeInTheDocument();
    expect(screen.getByText(props.list[0].col2)).toBeInTheDocument();
  });


  it('should render List with actions', () => {
    props.actions = [{
      key: 1,
      action: 'action',
      icon: 'icon'
    }]
    component = <List {...props} />
    render(component)
    expect(screen.getByText('Acciones')).toBeInTheDocument();
    expect(screen.getAllByText('icon').length).toBe(2);

  });

  it('should call handleActionClick', () => {
    render(component)
    const action = screen.getAllByText('icon')[0];
    expect(props.handleActionClick).toBeCalledTimes(0);
    userEvent.click(action);
    expect(props.handleActionClick).toBeCalledTimes(1);
  });
})
