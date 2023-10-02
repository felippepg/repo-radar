import { CircularProgress, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IRepositoryInfo } from '../data/interfaces/RepositoryInfo';
import { api } from '../data/services/api';
import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';
import { Button } from '../ui/components/data-display/Button';
import { Wrapper } from '../ui/components/data-display/Wrapper';
import { ErrorMessage } from '../ui/components/homepage/ErrorMessage';
import {
  Banner,
  BannerContent,
  BannerHeader,
  BannerInfoArea,
  BannerItem,
} from '../ui/components/repoDetails/Banner';

export const RepoDetails = () => {
  const githubUserInfo = useGetUserInfo();
  const [repository, setRepository] = useState<IRepositoryInfo>();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const { repo } = useParams();

  useEffect(() => {
    api
      .get(`/repos/${githubUserInfo?.login}/${repo}`)
      .then((res) => {
        setRepository(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Não foi possivel trazer as informações');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <Wrapper>
          <CircularProgress />
        </Wrapper>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Wrapper>
          <ErrorMessage role="alert">{error}</ErrorMessage>{' '}
        </Wrapper>
      </Container>
    );
  }
  return (
    <Container>
      <Wrapper>
        <Banner>
          <BannerHeader>{repository?.name}</BannerHeader>
          <BannerContent>
            {' '}
            {repository?.description
              ? repository.description
              : 'Não há uma descrição nesse projeto'}
          </BannerContent>

          <BannerInfoArea>
            <BannerItem>Linguagem: {repository?.language}</BannerItem>
            <BannerItem>Estrelas: {repository?.stargazers_count}</BannerItem>
          </BannerInfoArea>
          {repository?.html_url ? (
            <Button
              onClick={() => (window.location.href = repository.html_url)}
            >
              Conhecer Projeto
            </Button>
          ) : (
            ''
          )}
        </Banner>
      </Wrapper>
    </Container>
  );
};
