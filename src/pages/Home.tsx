import { TextField } from '../ui/components/inputs/TextField';
import { Button } from '../ui/components/data-display/Button';
import { api } from '../data/services/api';
import { useState } from 'react';
interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export const Home = () => {
  const [user, setUser] = useState('');
  const [githubUser, setGithubUser] = useState<GitHubUser>();
  const [error, setError] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    api
      .get(`/users/${user}`)
      .then((res) => setGithubUser(res.data))
      .catch(() => setError('Usuario não encontrado'));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          value={user}
          onChange={(event) => setUser(event.target.value)}
          placeholder="Digite o nome do usuário do github"
        />
        <Button role="button">Buscar</Button>
      </form>
      {githubUser && <p role="item">{githubUser.login}</p>}
    </div>
  );
};
