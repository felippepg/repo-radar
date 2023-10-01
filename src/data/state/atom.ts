import { atom } from 'recoil';
import { GitHubUser } from '../interfaces/GithubUser';

export const userInfo = atom<GitHubUser | null>({
  key: 'userInfo',
  default: null,
});
