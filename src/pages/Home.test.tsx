import { fireEvent, render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { server } from '../data/mocks/server';
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

  test('Deveria retornar uma mensagem de erro quando não encontrar usuário', async () => {
    render(<Home />);
    server.use(
      rest.get('https://api.github.com/users/xcxgfgfbky', (req, res, ctx) => {
        return res(
          ctx.status(404),
          ctx.json({
            message: 'Not Found',
            documentation_url:
              'https://docs.github.com/rest/users/users#get-a-user',
          })
        );
      })
    );
    const input = screen.getByPlaceholderText(
      'Digite o nome do usuário do github'
    );
    fireEvent.change(input, {
      target: {
        value: 'xcxgfgfbky',
      },
    });
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const errorMessage = await screen.findByRole('alert');
    expect(errorMessage).toBeInTheDocument();
  });
});
