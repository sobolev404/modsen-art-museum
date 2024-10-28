import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

jest.mock('../components/header/Header', () => () => <div>Header</div>);
jest.mock('../components/searchArt/SearchArt', () => () => (
  <div>Search Art</div>
));
jest.mock('../components/paginationArts/PaginationArts', () => () => (
  <div>Pagination Arts</div>
));
jest.mock('../components/otherArts/OtherArts', () => () => (
  <div>Other Arts</div>
));
jest.mock('../components/footer/Footer', () => () => <div>Footer</div>);

describe('Main Component', () => {
  it('renders Header, SearchArt, PaginationArts, OtherArts, and Footer components', () => {
    render(<Main />);

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Search Art')).toBeInTheDocument();
    expect(screen.getByText('Pagination Arts')).toBeInTheDocument();
    expect(screen.getByText('Other Arts')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
