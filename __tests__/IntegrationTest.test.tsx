import { render } from '@testing-library/react'
import Home from "@/app/page";

test('renders Home component with all child components', () => {
  const { getByTestId } = render(<Home />);

  expect(getByTestId('hero-container')).toBeInTheDocument();
  expect(getByTestId('about-us-container')).toBeInTheDocument();
  expect(getByTestId('our-values-container')).toBeInTheDocument();
  expect(getByTestId('how-we-work-container')).toBeInTheDocument();
  expect(getByTestId('creative-container')).toBeInTheDocument();
  expect(getByTestId('team-component')).toBeInTheDocument();
  expect(getByTestId('history-container')).toBeInTheDocument();
  expect(getByTestId('appointments-title')).toBeInTheDocument();
});
