import { useState } from 'react';
import { GitHubUser } from '../data/interfaces/GithubUser';
import { api } from '../data/services/api';
import { useAddUser } from '../data/state/hooks/useAddUser';
import { Button } from '../ui/components/data-display/Button';
import { Container } from '../ui/components/data-display/Container';
import { Wrapper } from '../ui/components/data-display/Wrapper';
import { ErrorMessage } from '../ui/components/homepage/ErrorMessage';
import { Form } from '../ui/components/homepage/Form';
import { ListItem } from '../ui/components/homepage/ListItem';
import { WelcomeMessage } from '../ui/components/homepage/WelcomeMessage';
import { TextField } from '../ui/components/inputs/TextField';

export const Home = () => {
  const [user, setUser] = useState('');
  const [githubUser, setGithubUser] = useState<GitHubUser | null>();
  const [error, setError] = useState('');
  const setUserInfo = useAddUser();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setGithubUser(null);
    api
      .get(`/users/${user}`)
      .then((res) => {
        setGithubUser(res.data);
        setUserInfo(res.data);
      })
      .catch(() => setError('Usuario não encontrado'));

    setTimeout(() => {
      setError('');
    }, 5000);
  };
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <TextField
            value={user}
            onChange={(event) => setUser(event.target.value)}
            placeholder="Digite o nome do usuário do github"
          />
          <Button role="button">Buscar</Button>
        </Form>
        <WelcomeMessage>
          Seja bem vindo ao RepoRadar, esse projeto tem como objetivo puxar
          algumas informações básicas de um usuário que possui conta no github,
          sendo capaz de puxar informações de repositório, seguires, avatar,
          email e bio
        </WelcomeMessage>
        {/* {githubUser && <ListItem role="item">{githubUser.login}</ListItem>} */}
        {githubUser && (
          <ListItem role="item" to={`/user-details/${githubUser.login}`}>
            {githubUser.login}
          </ListItem>
        )}

        {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
      </Wrapper>
    </Container>
  );
};
