import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home page', () => {
  test('Deveria retornar um botão de pesquisar', () => {
    render(<Home />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
