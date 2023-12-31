import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { user } from '../data/mocks/user';
import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';
import { RepoDetails } from './RepoDetails';

jest.mock('../data/state/hooks/useGetUserInfo', () => {
  return {
    useGetUserInfo: jest.fn(),
  };
});

describe('RepoDetails page', () => {
  beforeEach(() => {
    (useGetUserInfo as jest.Mock).mockReturnValue(user);
  });

  test('Deveria retornar Nome, descrição, número de estrelas, linguagem', async () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <RepoDetails />
        </RecoilRoot>
      </BrowserRouter>
    );
    const name = 'med-voll';
    const description = 'Projeto de estudo do curso da Alura de Spring Boot';
    const stargazers_count = 'Estrelas: 0';
    const language = 'Linguagem: Java';
    await waitFor(() => {
      const elementName = screen.getByText(name);
      const elementDescription = screen.getByText(description);
      const elementStargazers_count = screen.getByText(
        String(stargazers_count)
      );
      const elementLanguage = screen.getByText(language);

      expect(elementName).toBeInTheDocument();
      expect(elementDescription).toBeInTheDocument();
      expect(elementStargazers_count).toBeInTheDocument();
      expect(elementLanguage).toBeInTheDocument();
    });
  });
});
