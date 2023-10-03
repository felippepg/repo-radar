import { useSetRecoilState } from 'recoil';
import { GitHubUser } from '../../interfaces/GithubUser';
import { userInfo } from '../atom';

export const useAddUser = () => {
  const setAddUser = useSetRecoilState(userInfo);

  return (githubUser: GitHubUser) => {
    setAddUser(githubUser);
    localStorage.setItem('user', JSON.stringify(githubUser));
  };
};
