import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './Home';

describe('Home page', () => {
  test('Deveria retornar um botão de pesquisar', () => {
    render(<Home />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  test('Deveria retornar um usuário do github ao clicar no botao', async () => {
    render(<Home />);
    const input = screen.getByPlaceholderText(
      'Digite o nome do usuário do github'
    );
    fireEvent.change(input, {
      target: {
        value: 'felippepg',
      },
    });
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const users = await screen.findByRole('item');
    expect(users).toBeInTheDocument();
  });
});
