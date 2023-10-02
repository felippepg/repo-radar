import { useParams } from 'react-router';

export const RepoDetails = () => {
  const { repo } = useParams();
  return <p>{repo}</p>;
};
