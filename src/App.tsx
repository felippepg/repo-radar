import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home } from './pages/Home';
import { RepoDetails } from './pages/RepoDetails';
import { RepoList } from './pages/RepoList';
import { UserDetail } from './pages/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-details/:user" element={<UserDetail />} />
          <Route path="/user-repos" element={<RepoList />} />
          <Route path="/repo-details/:repo" element={<RepoDetails />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
