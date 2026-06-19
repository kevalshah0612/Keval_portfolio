import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio positioning and project proof', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /software engineer for backend, full-stack and ai-assisted systems/i
    })
  ).toBeInTheDocument();

  expect(screen.getByRole('heading', { name: /JobPulse/i })).toBeInTheDocument();
  expect(screen.getAllByText(/Backend Software Engineer Resume/i).length).toBeGreaterThan(0);
});
