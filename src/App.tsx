import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home } from './pages/Home';
import { UserDetail } from './pages/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-details/:user" element={<UserDetail />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
