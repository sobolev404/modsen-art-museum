import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../assets/icons/home.svg', () => 'home-icon');
jest.mock('../../assets/icons/fav.svg', () => 'fav-icon');
jest.mock('../../assets/icons/museum-logo 2.svg', () => 'museum-logo');

describe('Header Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it('renders the logo with correct alt text', () => {
    const logo = screen.getByAltText('Museum Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    const homeLink = screen.getByText('Home');
    const favLink = screen.getByText('Your favourites');
    
    expect(homeLink).toBeInTheDocument();
    expect(favLink).toBeInTheDocument();
  });

  it('closes menu when clicking outside of it', () => {
    const burgerButton = screen.getByRole('button');
    fireEvent.click(burgerButton); // Открываем меню

    fireEvent.click(document); // Кликаем вне меню
    expect(document.body.classList.contains('_lock')).toBe(false);
    expect(screen.getByRole('navigation')).not.toHaveClass('active');
  });
});
