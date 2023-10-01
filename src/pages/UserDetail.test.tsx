import { render, screen, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';
import { UserDetail } from './UserDetail';
jest.mock('../data/state/hooks/useGetUserInfo', () => {
  return {
    useGetUserInfo: jest.fn(),
  };
});
describe('UserDetail page', () => {
  const user = {
    login: 'felippepg',
    id: 79487996,
    node_id: 'MDQ6VXNlcjc5NDg3OTk2',
    avatar_url: 'https://avatars.githubusercontent.com/u/79487996?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/felippepg',
    html_url: 'https://github.com/felippepg',
    followers_url: 'https://api.github.com/users/felippepg/followers',
    following_url:
      'https://api.github.com/users/felippepg/following{/other_user}',
    gists_url: 'https://api.github.com/users/felippepg/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/felippepg/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/felippepg/subscriptions',
    organizations_url: 'https://api.github.com/users/felippepg/orgs',
    repos_url: 'https://api.github.com/users/felippepg/repos',
    events_url: 'https://api.github.com/users/felippepg/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/felippepg/received_events',
    type: 'User',
    site_admin: false,
    name: 'Felippe Pires',
    company: null,
    blog: '',
    location: 'Brazil',
    email: null,
    hireable: null,
    bio: 'Software developer',
    twitter_username: null,
    public_repos: 30,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '2021-02-23T00:12:13Z',
    updated_at: '2023-08-29T10:28:12Z',
  };

  beforeEach(() => {
    (useGetUserInfo as jest.Mock).mockReturnValue(user);
  });

  test('Deveria retornar informações do usuario', async () => {
    render(
      <RecoilRoot>
        <UserDetail />
      </RecoilRoot>
    );

    const bio = 'Bio: Software developer';
    await waitFor(() => {
      const element = screen.getByText(bio);
      expect(element).toBeInTheDocument();
    });
  });
});
