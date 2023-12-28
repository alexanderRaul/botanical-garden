import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Creative from '@/app/ui/Creative';

import { alpinaFine } from '@/app/fonts/localFonts';

describe('Creative component', () => {
  test('renders without crashing', () => {
    render(<Creative />);
    expect(screen.getByTestId('botanical-image')).toBeInTheDocument();
  });

  test('renders "Nuestra Ambicion" with correct styling', () => {
    render(<Creative />);
    const ambitionText = screen.getByText(/Nuestra Ambicion/i);
    expect(ambitionText).toHaveClass(alpinaFine.className);
  });

  test('renders the botanical image with correct styling', () => {
    render(<Creative />);
    const botanicalImage = screen.getByTestId('botanical-image');
    expect(botanicalImage).toHaveClass('bg-orange-500');
  });

  test('renders the description text with correct styling', () => {
    render(<Creative />);
    const descriptionText = screen.getByText(/Ya sea en una tarde tranquila/i);
    expect(descriptionText).toHaveClass('text-[4.25em]');
  });
});
