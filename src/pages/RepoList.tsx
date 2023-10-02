// import { useEffect, useState } from 'react';
// import { IRepository } from '../data/interfaces/Repository';
// import { api } from '../data/services/api';
// import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';

// export const RepoList = () => {
//   const githubUser = useGetUserInfo();
//   const [repos, setRepos] = useState<IRepository[] | null>();
//   useEffect(() => {
//     api
//       .get(`/users/${githubUser?.login}/repos`, {
//         params: {
//           sort: 'stars',
//         },
//       })
//       .then((res) => setRepos(res.data));
//   }, []);
//   return (
//     <ul role="list">
//       {repos?.map((repo, index) => (
//         <li key={index}>{repo.name}</li>
//       ))}
//     </ul>
//   );
// };
import { useEffect, useState } from 'react';
import { IRepository } from '../data/interfaces/Repository';
import { api } from '../data/services/api';
import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';

export const RepoList = () => {
  const githubUser = useGetUserInfo();
  const [repos, setRepos] = useState<IRepository[] | null>(null);

  useEffect(() => {
    api
      .get(`/users/${githubUser?.login}/repos`, {
        params: {
          sort: 'stars',
        },
      })
      .then((res) => setRepos(res.data));
  }, [githubUser]); // Adicionando githubUser como dependência para re-executar o efeito quando ele mudar

  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (!repos) {
      return;
    }

    const newList = [...repos];
    const movedRepo = newList.splice(index, 1)[0];
    if (direction === 'up' && index > 0) {
      newList.splice(index - 1, 0, movedRepo);
    } else if (direction === 'down' && index < repos.length - 1) {
      newList.splice(index + 1, 0, movedRepo);
    }
    setRepos(newList);
  };

  return (
    <ul role="list">
      {repos?.map((repo, index) => (
        <li key={index}>
          {index > 0 && (
            <button onClick={() => moveItem(index, 'up')}>Subir</button>
          )}
          {index < repos.length - 1 && (
            <button onClick={() => moveItem(index, 'down')}>Descer</button>
          )}
          {repo.name}
          <button>Detalhes</button>
        </li>
      ))}
    </ul>
  );
};
