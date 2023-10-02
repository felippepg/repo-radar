import { useNavigate } from 'react-router';
import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';
import { Button } from '../ui/components/data-display/Button';
import { CardItem } from '../ui/components/data-display/CardItem';
import { Container } from '../ui/components/data-display/Container';
import { Wrapper } from '../ui/components/data-display/Wrapper';
import {
  Card,
  CardLeft,
  UserInfoArea,
} from '../ui/components/userDetails/Card';
import { Img } from '../ui/components/userDetails/Img';

export const UserDetail = () => {
  const githubUserInfo = useGetUserInfo();
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Card>
          {' '}
          <div>
            <Img src={githubUserInfo?.avatar_url} alt="Avatar do usuário" />
          </div>
          <CardLeft>
            <UserInfoArea>
              <CardItem>Seguidores: {githubUserInfo?.followers}</CardItem>
              <CardItem>Seguindo: {githubUserInfo?.following}</CardItem>
            </UserInfoArea>

            {githubUserInfo?.email !== null ? (
              <CardItem>githubUserInfo?.email</CardItem>
            ) : (
              <CardItem>Não há um email cadastrado</CardItem>
            )}
            <CardItem>Bio: {githubUserInfo?.bio}</CardItem>

            <Button onClick={() => navigate('/user-repos')}>
              Ver repositórios
            </Button>
          </CardLeft>
        </Card>
      </Wrapper>
    </Container>
  );
};
