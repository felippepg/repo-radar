import { useEffect } from 'react';
import { useParams } from 'react-router';
import { api } from '../data/services/api';
import { Container } from '../ui/components/data-display/Container';
import { Wrapper } from '../ui/components/data-display/Wrapper';

export const UserDetail = () => {
  useEffect(() => {
    api.get(`/users/${user}`).then((res) => console.log(res.data));
  }, []);
  const { user } = useParams();

  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};
