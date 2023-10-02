// import { useEffect, useState } from 'react';
// import { IRepository } from '../data/interfaces/Repository';
// import { api } from '../data/services/api';
// import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';
// import { Container } from '../ui/components/data-display/Container';
// import { Wrapper } from '../ui/components/data-display/Wrapper';
// import { DetailsButton } from '../ui/components/repolist/DetailsButton';
// import { Item } from '../ui/components/repolist/Item';

// export const RepoList = () => {
//   const githubUser = useGetUserInfo();
//   const [repos, setRepos] = useState<IRepository[]>([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     api
//       .get(`/users/${githubUser?.login}/repos`, {
//         params: {
//           sort: 'stars',
//         },
//       })
//       .then((res) => setRepos(res.data))
//       .catch(() => setError('Usuario não encontrado'));
//   }, [githubUser]); // Adicionando githubUser como dependência para re-executar o efeito quando ele mudar

//   const moveItem = (index: number, direction: 'up' | 'down') => {
//     if (!repos) {
//       return;
//     }

//     const newList = [...repos];
//     const movedRepo = newList.splice(index, 1)[0];
//     if (direction === 'up' && index > 0) {
//       newList.splice(index - 1, 0, movedRepo);
//     } else if (direction === 'down' && index < repos.length - 1) {
//       newList.splice(index + 1, 0, movedRepo);
//     }
//     setRepos(newList);
//   };

//   return (
//     <Container>
//       <Wrapper>
//         <ul role="list" style={{ width: '100%' }}>
//           {repos?.map((repo, index) => (
//             <Item key={index}>
//               <div>
//                 {index > 0 && (
//                   <span
//                     style={{ cursor: 'pointer' }}
//                     onClick={() => moveItem(index, 'up')}
//                     className="material-icons"
//                   >
//                     expand_less
//                   </span>
//                 )}
//                 {index < repos.length - 1 && (
//                   <span
//                     style={{ cursor: 'pointer' }}
//                     onClick={() => moveItem(index, 'down')}
//                     className="material-icons"
//                   >
//                     expand_more
//                   </span>
//                 )}
//                 {repo.name}
//               </div>

//               <DetailsButton>Detalhes</DetailsButton>
//             </Item>
//           ))}
//         </ul>
//       </Wrapper>
//     </Container>
//   );
// };

import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { IRepository } from '../data/interfaces/Repository';
import { api } from '../data/services/api';
import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';
import { Container } from '../ui/components/data-display/Container';
import { Wrapper } from '../ui/components/data-display/Wrapper';
import { ErrorMessage } from '../ui/components/homepage/ErrorMessage';
import { DetailsButton } from '../ui/components/repolist/DetailsButton';
import { Item } from '../ui/components/repolist/Item';

export const RepoList = () => {
  const githubUser = useGetUserInfo();
  const [repos, setRepos] = useState<IRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get(`/users/${githubUser?.login}/repos`, {
        params: {
          sort: 'stars',
        },
      })
      .then((res) => {
        setRepos(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Usuário não encontrado');
        setLoading(false);
      });
  }, [githubUser]);

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

  if (loading) {
    return (
      <Container>
        <Wrapper>
          <CircularProgress />
        </Wrapper>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Wrapper>
          <ErrorMessage role="alert">{error}</ErrorMessage>{' '}
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        <ul role="list" style={{ width: '100%' }}>
          {repos?.map((repo, index) => (
            <Item key={index}>
              <div>
                {index > 0 && (
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => moveItem(index, 'up')}
                    className="material-icons"
                  >
                    expand_less
                  </span>
                )}
                {index < repos.length - 1 && (
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => moveItem(index, 'down')}
                    className="material-icons"
                  >
                    expand_more
                  </span>
                )}
                {repo.name}
              </div>

              <DetailsButton
                onClick={() => navigate(`/repo-details/${repo.name}`)}
              >
                Detalhes
              </DetailsButton>
            </Item>
          ))}
        </ul>
      </Wrapper>
    </Container>
  );
};
