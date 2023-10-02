import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { IRepositoryInfo } from '../data/interfaces/RepositoryInfo';
import { api } from '../data/services/api';
import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';
import { Button } from '../ui/components/data-display/Button';
import { Wrapper } from '../ui/components/data-display/Wrapper';
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
  const { repo } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/repos/${githubUserInfo?.login}/${repo}`)
      .then((res) => setRepository(res.data))
      .catch(() => setError('Não foi possivel trazer as informações'));
  }, []);
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
