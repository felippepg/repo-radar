import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { UserDetail } from './pages/UserDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-details/:user" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
