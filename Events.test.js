import { getByTestId, render, screen } from '@testing-library/react';
import App from '../Pages/Events';
import fireEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';

test('render username input', () => {
  render(<App />);
  const element = screen.getByTestId('user-name')
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("type", "text");
});

test('pass username type into input field', () => {
  render(<App />);
  const element = screen.getByTestId("user-name");
  userEvent.type(element,'Max');
  expect(element.value).toBe('Max')
  
});

test('render email address input', () => {
  render(<App />);
  const element = screen.getByTestId('email-address')
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("type", "email");
});

test('pass email address type into input field', () => {
  render(<App />);
  const element = screen.getByTestId("email-address");
  userEvent.type(element,'max@gmail.com');
  expect(element.value).toBe('max@gmail.com')
  
});

test('render phone input', () => {
  render(<App />);
  const element = screen.getByTestId('phone')
  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("type", "tel");
});

test('pass phone type into input field', () => {
  render(<App />);
  const element = screen.getByTestId("phone");
  userEvent.type(element,'9999999999');
  expect(element.value).toBe('9999999999')
});

test("render the submit button",() => {
  render(<App />);
  const element = screen.getByTestId("submit");
  expect(element).toBeInTheDocument();
})

test("form submit",()=> {
  const handleSubmit= jest.fn(e => e.preventDefault())
  const { getByText } =render (<form onSubmit={handleSubmit}><button type="submit"><span>Submit</span></button></form>,)
  fireEvent.click(getByText(/submit/i))
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

test("render the clear button",() => {
  render(<App />);
  const element = screen.getByTestId("clear");
  expect(element).toBeInTheDocument();
})

test("form resets",()=> {
  const reset= jest.fn()
  const { getByText } =render (<form onClick={reset}><button type="reset"><span>Clear</span></button></form>,)
  fireEvent.click(getByText(/clear/i))
  expect(reset).toHaveBeenCalledTimes(1)
})