import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { user } from '../data/mocks/user';
import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';
import { RepoList } from './RepoList';

jest.mock('../data/state/hooks/useGetUserInfo', () => {
  return {
    useGetUserInfo: jest.fn(),
  };
});

describe('Repolist page', () => {
  beforeEach(() => {
    (useGetUserInfo as jest.Mock).mockReturnValue(user);
  });
  test('Deveria retornar lista de repositórios', async () => {
    render(
      <RecoilRoot>
        <RepoList />
      </RecoilRoot>
    );

    await waitFor(() => {
      const repositories = screen.getAllByRole('listitem');
      expect(repositories).toHaveLength(3);
    });
  });

  test('Deveria alterar a ordem dos repositórios', async () => {
    render(
      <RecoilRoot>
        <RepoList />
      </RecoilRoot>
    );

    await waitFor(() => {
      const repositories = screen.getAllByRole('listitem');
      const [repo1, repo2, repo3] = repositories;

      expect(repo1).toBeInTheDocument();
      expect(repo2).toBeInTheDocument();
      expect(repo3).toBeInTheDocument();

      const upButton = within(repo2).getByText('expand_more');
      const downButton = within(repo2).getByText('expand_less');
      fireEvent.click(upButton);

      const updatedRepositories = screen.getAllByRole('listitem');
      const [updatedRepo1, updatedRepo2, updatedRepo3] = updatedRepositories;

      expect(updatedRepo2).toBe(updatedRepo1.nextSibling);
      expect(updatedRepo1).toBe(updatedRepo2.previousSibling);

      fireEvent.click(downButton);

      const finalRepositories = screen.getAllByRole('listitem');
      const [finalRepo1, finalRepo2, finalRepo3] = finalRepositories;

      expect(finalRepo2).toBe(finalRepo1.nextSibling);
      expect(finalRepo1).toBe(finalRepo2.previousSibling);
      expect(finalRepo2).toBe(finalRepo3.previousSibling);
      expect(finalRepo3.nextSibling).toBeNull();
    });
  });
});
