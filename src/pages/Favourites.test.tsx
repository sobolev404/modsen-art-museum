import React from 'react';
import { render, screen } from '@testing-library/react';
import Favourites from './Favourites';

jest.mock('../components/header/Header', () => () => <div>Header</div>);
jest.mock('../components/favouriteArts/FavouriteArts', () => () => <div>Favourite Arts</div>);
jest.mock('../components/footer/Footer', () => () => <div>Footer</div>);

describe('Favourites Component', () => {
  it('renders Header, FavouriteArts, and Footer components', () => {
    render(<Favourites />);

    // Проверка на рендеринг Header
    expect(screen.getByText('Header')).toBeInTheDocument();
    
    // Проверка на рендеринг FavouriteArts
    expect(screen.getByText('Favourite Arts')).toBeInTheDocument();

    // Проверка на рендеринг Footer
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
