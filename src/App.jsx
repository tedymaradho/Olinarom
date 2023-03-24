import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import AddUser from './pages/AddUser';
import Home from './pages/Home';
import Login from './pages/Login';
import User from './pages/User';
import { setCurrentUser } from './store/user/userAction';

import './styles/main.scss';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/users/1');
        setCurrentUser(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="users" element={<User />} />
          <Route path="user/add" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
