import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import UserForm from './pages/UserForm';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import { updateCurrentUser } from './redux/apiCalls';
import UserDetail from './pages/UserDetail';

import './styles/main.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.token) {
      updateCurrentUser(userData.username, userData.token, dispatch);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="users" element={<User />} />
          <Route path="user/add" element={<UserForm title="add" />} />
          <Route path="user/edit/:id" element={<UserForm title="edit" />} />
          <Route path="user/:id" element={<UserDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
