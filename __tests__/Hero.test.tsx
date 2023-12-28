import { alpinaFine, romanFont } from '@/app/fonts/localFonts';
import { render, screen } from '@testing-library/react';
import Hero from '@/app/ui/Hero';

describe('Hero component', () => {
  test('applies the correct styling to the hero text', () => {
    render(<Hero />);
    const jardínBotánicoText = screen.getByText(/Jardín Botánico/i);
    const martinCárdenasText = screen.getByText(/Martin Cárdenas/i);

    expect(jardínBotánicoText).toHaveClass('text-[5.7em]');
    expect(jardínBotánicoText).toHaveClass(romanFont.className);
    expect(martinCárdenasText).toHaveClass(alpinaFine.className);
    expect(martinCárdenasText).toHaveClass('tracking-[-.04em]');
    expect(martinCárdenasText).toHaveClass('text-[8.6em]');
  });

  test('renders the image with the correct attributes', () => {
    render(<Hero />);
    const image = screen.getByAltText('a picture of a tree');

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/_next/image?url=%2Fgif-1.gif&w=3840&q=75');
    expect(image).toHaveAttribute('alt', 'a picture of a tree');
  });
});

