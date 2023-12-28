import { alpinaFine, romanFont } from '@/app/fonts/localFonts';
import History from '@/app/ui/History';
import { render, screen } from '@testing-library/react';

test('renders the heading with correct styling and includes alpinaFine class', () => {
  render(<History />);

  const heading = screen.getByRole('heading', { name: /UN ESPACIO Que INSPIRA DIÁLOGO/i });
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveClass('tracking-[-.02em] text-[15.2em] leading-[.9] sm:text-[11em] sm:leading-[.90em]');

  const alpinaFineSpan = heading.querySelector(`.${alpinaFine.className}`);
  expect(alpinaFineSpan).toBeInTheDocument();
});

test('renders both images with correct attributes', () => {
  render(<History />);

  const altText1 = 'a picture of a white botanical garden';
  const altText2 = 'another picture of a white botanical garden';

  const image1 = screen.getByAltText(altText1);
  const image2 = screen.getByAltText(altText2);

  expect(image1).toBeInTheDocument();
  expect(image1).toHaveAttribute('alt', altText1);
  expect(image1).toHaveAttribute('data-nimg', 'fill');

  expect(image2).toBeInTheDocument();
  expect(image2).toHaveAttribute('alt', altText2);
  expect(image2).toHaveAttribute('data-nimg', 'fill');

  const expectedSrc1 = "/_next/image?url=%2Fhistory-1.jpg&w=3840&q=75";
  const expectedSrc2 = "/_next/image?url=%2Fhistory-2.jpg&w=3840&q=75";

  expect(image1).toHaveAttribute('src', expect.stringContaining(expectedSrc1));
  expect(image2).toHaveAttribute('src', expect.stringContaining(expectedSrc2));
});

test('renders the text content with correct styling', () => {
  render(<History />);
  const textContent = screen.getByText(/El Jardín Botánico Martín Cárdenas está diseñado para/i);
  expect(textContent).toBeInTheDocument();
  expect(textContent).toHaveClass(`mt-0`);
});

test('renders the first image container with correct styling', () => {
  render(<History />);
  const imageContainer1 = screen.getByAltText('a picture of a white botanical garden').parentElement;
  expect(imageContainer1).toBeInTheDocument();
  expect(imageContainer1).toHaveClass('mt-[28px] relative w-[50em] h-[72em] sm:w-[20em] sm:h-[28em]');
});

test('renders the second image container with correct styling', () => {
  render(<History />);
  const imageContainer2 = screen.getByAltText('another picture of a white botanical garden').parentElement.nextElementSibling;
  expect(imageContainer2).toBeInTheDocument();
  expect(imageContainer2).toHaveClass('mt-[24px] text-[5.3em] leading-[1.3] sm:text-[1.3em]');
});
