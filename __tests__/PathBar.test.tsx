import { lightFont } from '@/app/fonts/localFonts';
import PathBar from '@/app/ui/PathBar';
import { render, screen } from '@testing-library/react';

test('renders the component with correct styling', () => {
  render(<PathBar />);
  const pathBar = screen.getByTestId('path-bar');
  expect(pathBar).toBeInTheDocument();
  expect(pathBar).toHaveClass('fixed w-full z-[99] mix-blend-difference top-[0%] text-white tracking-[.09em]');
});

test('renders the Martín Cárdenas link with correct styling and content', () => {
  render(<PathBar />);
  const martínCárdenasLink = screen.getByText('Martín Cárdenas');
  expect(martínCárdenasLink).toBeInTheDocument();
  expect(martínCárdenasLink).toHaveClass(`${lightFont.className} text-[2.5em] sm:text-[1.2em]`);
});

test('renders the menu links with correct styling and content', () => {
  render(<PathBar />);
  const menuLinks = screen.getAllByRole('link', { name: /home|schedule|blog|exploration|dashboard/i });
  expect(menuLinks.length).toBe(4);
});
