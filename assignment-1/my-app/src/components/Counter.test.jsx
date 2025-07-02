import { render, fireEvent } from '@testing-library/react';
import Counter from '@/components/Counter';

describe('Counter', () => {                     //groups all test related to counter
  it('starts at 0', () => {                           // start the test case 1
    const { getByText } = render(<Counter />);          // rendering the counter component
    expect(getByText('0')).toBeInTheDocument();         // expects initial value to be 0
  });

  it('increments when "Increase" is clicked', () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText(/increase/i));              // if increment button is clicked
    expect(getByText('1')).toBeInTheDocument();           // expect value to be 1
  });

  it('decrements when "Decrease" is clicked', () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText(/decrease/i));
    expect(getByText('-1')).toBeInTheDocument();
  });
});
