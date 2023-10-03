import { useRecoilValue } from 'recoil';
import { userInfo } from '../atom';

export const useGetUserInfo = () => {
  const githubUserInfo = useRecoilValue(userInfo);
  const localstorageUser = localStorage.getItem('user');
  if (githubUserInfo == null && localstorageUser !== null) {
    return JSON.parse(localstorageUser);
  }
  return githubUserInfo;
};
