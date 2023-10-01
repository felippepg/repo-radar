import { useRecoilValue } from 'recoil';
import { userInfo } from '../atom';

export const useGetUserInfo = () => {
  const githubUserInfo = useRecoilValue(userInfo);
  return githubUserInfo;
};
