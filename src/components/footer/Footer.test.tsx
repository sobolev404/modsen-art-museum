import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../assets/icons/museum-logo-fot.svg', () => 'museum-logo-fot');
jest.mock('../../assets/icons/logo-modsen.svg', () => 'logo-modsen');

describe('Footer Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  it('renders the museum logo with the correct alt text', () => {
    const museumLogo = screen.getByAltText('museum logo');
    expect(museumLogo).toBeInTheDocument();
    expect(museumLogo.getAttribute('src')).toContain('museum-logo-fot');
  });

  it('renders the Modsen logo with the correct alt text and external link', () => {
    const modsenLogo = screen.getByAltText('modsen logo');
    expect(modsenLogo).toBeInTheDocument();
    expect(modsenLogo.getAttribute('src')).toContain('logo-modsen');

    const modsenLink = screen.getByRole('link', { name: 'modsen logo' });
    expect(modsenLink).toHaveAttribute('href', 'https://www.modsen-software.com/');
    expect(modsenLink).toHaveAttribute('target', '_blank');
  });
});
