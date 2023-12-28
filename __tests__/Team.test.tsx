import Team from '@/app/ui/Team';
import { render, screen } from '@testing-library/react';

test('renders the component with correct styling', () => {
  render(<Team />);
  const teamComponent = screen.getByTestId('team-component');
  expect(teamComponent).toBeInTheDocument();
  expect(teamComponent).toHaveClass('z-[3] py-[72px] relative sm:mt-[182px]');
});

test('renders the "Conoce Al Equipo" tag box', () => {
  render(<Team />);
  const tagBox = screen.getByText('Conoce Al Equipo');
  expect(tagBox).toBeInTheDocument();
});


test('renders the images with correct styling and alt text', () => {
  render(<Team />);
  const images = screen.getAllByAltText(/a picture of/i);

  images.forEach((image) => {
    expect(image).toHaveClass('object-cover');
  });
});

