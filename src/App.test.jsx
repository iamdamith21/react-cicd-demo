import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component CI Tests', () => {
  it('renders the header title correctly', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/GitHub Actions/i);
  });

  it('renders all four CI/CD pipeline stage cards', () => {
    render(<App />);
    expect(screen.getByText('1. Code Linting')).toBeInTheDocument();
    expect(screen.getByText('2. Automated Tests')).toBeInTheDocument();
    expect(screen.getByText('3. Production Build')).toBeInTheDocument();
    expect(screen.getByText('4. Continuous Deployment')).toBeInTheDocument();
  });

  it('performs addition in the interactive calculator', () => {
    render(<App />);
    const resultElement = screen.getByTestId('calc-result');
    // Default 10 + 5 = 15
    expect(resultElement.textContent).toBe('15');

    // Click multiplication button
    const mulButton = screen.getByText('× Mul');
    fireEvent.click(mulButton);
    // 10 * 5 = 50
    expect(resultElement.textContent).toBe('50');
  });
});
