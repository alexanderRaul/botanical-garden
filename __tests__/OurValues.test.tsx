import { render, screen } from '@testing-library/react';
import { alpinaFine } from '@/app/fonts/localFonts';
import OurValues from '@/app/ui/OurValues';


test('renders the component with correct styling', () => {
  render(<OurValues />);

  const valuesContainer = screen.getByTestId('our-values-container');
  expect(valuesContainer).toBeInTheDocument();
  expect(valuesContainer).toHaveClass('z-[3] py-[72px] relative sm:py-[182px]');
});

test('renders the tag box with the correct tag', () => {
  render(<OurValues />);

  const tagBox = screen.getByText('Nuestros Valores');
  expect(tagBox).toBeInTheDocument();
});

test('renders the first value with correct styling and content', () => {
  render(<OurValues />);

  const firstValue = screen.getByText('Conservación');
  expect(firstValue).toBeInTheDocument();
  expect(firstValue).toHaveClass('mt-[42px] text-[14em] tracking-[-.03em] sm:mt-[82px] sm:text-[9em]');
});

test('renders the second value with correct styling, content, and alpinaFine class', () => {
  render(<OurValues />);

  const secondValueContainer = screen.getByText('Educación').parentElement;
  expect(secondValueContainer).toBeInTheDocument();
  expect(secondValueContainer).toHaveClass('ml-auto');

  const alpinaFineText = secondValueContainer.querySelector(`.${alpinaFine.className}`);
  expect(alpinaFineText).toBeInTheDocument();
  expect(alpinaFineText).toHaveTextContent('Educación');
  expect(alpinaFineText).toHaveClass('text-red-600');
});

test('renders the third value with correct styling and content', () => {
  render(<OurValues />);

  const thirdValueContainer = screen.getByText('Claridad').parentElement;
  expect(thirdValueContainer).toBeInTheDocument();
  expect(thirdValueContainer).toHaveClass('ml-[0%] sm:ml-[20%]');

  const content = thirdValueContainer.querySelector('div');
  expect(content).toBeInTheDocument();
  expect(content).toHaveTextContent('Claridad');
});
