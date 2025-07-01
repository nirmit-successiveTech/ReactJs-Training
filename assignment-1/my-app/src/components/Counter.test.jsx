import { render, fireEvent } from '@testing-library/react';
import Counter from '@/components/Counter';

describe('Counter', () => {
  it('starts at 0', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('0')).toBeInTheDocument();
  });

  it('increments when "Increase" is clicked', () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText(/increase/i));
    expect(getByText('1')).toBeInTheDocument();
  });

  it('decrements when "Decrease" is clicked', () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText(/decrease/i));
    expect(getByText('-1')).toBeInTheDocument();
  });
});
