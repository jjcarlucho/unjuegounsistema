import React from 'react';
import { render, screen } from '@testing-library/react';
import Benefits from './Benefits';

describe('Benefits', () => {
  it('renderiza el título de la sección', () => {
    render(<Benefits />);
    expect(screen.getByText(/por qué funciona/i)).toBeInTheDocument();
    expect(screen.getByText(/este sistema/i)).toBeInTheDocument();
  });

  it('renderiza todas las tarjetas de beneficios', () => {
    render(<Benefits />);
    const cards = screen.getAllByTestId('benefit-card');
    expect(cards.length).toBe(6);
  });
}); 