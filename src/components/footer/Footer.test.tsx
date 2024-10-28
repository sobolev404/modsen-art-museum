import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Для поддержки `Link` из `react-router-dom`
import Footer from './Footer';

describe('Footer component', () => {
  it('renders the museum logo with the correct alt text', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    const museumLogo = screen.getByAltText('museum logo');
    expect(museumLogo).toBeInTheDocument();
    expect(museumLogo.getAttribute('src')).toContain('museum-logo-fot.svg');
  });

  it('renders the Modsen logo with the correct alt text and external link', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    const modsenLogo = screen.getByAltText('modsen logo');
    expect(modsenLogo).toBeInTheDocument();
    expect(modsenLogo.getAttribute('src')).toContain('logo-modsen.svg');
    
    const modsenLink = screen.getByRole('link', { name: 'modsen logo' });
    expect(modsenLink).toHaveAttribute('href', 'https://www.modsen-software.com/');
    expect(modsenLink).toHaveAttribute('target', '_blank');
  });
});
