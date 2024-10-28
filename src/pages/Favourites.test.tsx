import React from 'react';
import { render, screen } from '@testing-library/react';
import Favourites from './Favourites';

jest.mock('../components/header/Header', () => () => <div>Header</div>);
jest.mock('../components/favouriteArts/FavouriteArts', () => () => (
  <div>Favourite Arts</div>
));
jest.mock('../components/footer/Footer', () => () => <div>Footer</div>);

describe('Favourites Component', () => {
  it('renders Header, FavouriteArts, and Footer components', () => {
    render(<Favourites />);

    expect(screen.getByText('Header')).toBeInTheDocument();

    expect(screen.getByText('Favourite Arts')).toBeInTheDocument();

    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
