import { render, screen } from '@testing-library/react';
import HowWeWork from '@/app/ui/HowWeWork';

test('renders the component with correct styling', () => {
  render(<HowWeWork />);

  const howWeWorkContainer = screen.getByTestId('how-we-work-container');
  expect(howWeWorkContainer).toBeInTheDocument();
  expect(howWeWorkContainer).toHaveClass('z-[3] py-[72px] relative sm:py-[182px]');
});

test('renders the tag box with the correct tag', () => {
  render(<HowWeWork />);

  const tagBox = screen.getByText('Como Trabajamos');
  expect(tagBox).toBeInTheDocument();
});

test('renders the correct number of links', () => {
  render(<HowWeWork />);

  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(3);
});
