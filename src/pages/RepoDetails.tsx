import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { IRepositoryInfo } from '../data/interfaces/RepositoryInfo';
import { api } from '../data/services/api';
import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';

export const RepoDetails = () => {
  const githubUserInfo = useGetUserInfo();
  const [repository, setRepository] = useState<IRepositoryInfo>();
  const [error, setError] = useState('');
  const { repo } = useParams();

  useEffect(() => {
    api
      .get(`/repos/${githubUserInfo?.login}/${repo}`)
      .then((res) => setRepository(res.data))
      .catch(() => setError('Não foi possivel trazer as informações'));
  }, []);
  return (
    <div>
      <span>{repository?.name}</span>
      <span>{repository?.language}</span>
      <span>{repository?.stargazers_count}</span>
      <span>{repository?.description}</span>
      <a href={repository?.html_url}></a>
    </div>
  );
};
