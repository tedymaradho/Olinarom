import { useEffect, useState } from 'react';
import { GiChaingun } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { updateCurrentUser } from '../redux/apiCalls';
import axios from 'axios';

const Login = () => {
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { error, pending } = useSelector((state) => state.user);

  useEffect(() => {
    pending === false && navigate('/users');
  }, [pending]);

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!uname || !pass) return;

    const resLogin = await axios.post('https://fakestoreapi.com/auth/login', {
      username: uname,
      password: pass,
    });

    updateCurrentUser(uname, resLogin.data.token, dispatch);
  };

  return (
    <div className="login">
      <div className="login__card">
        <GiChaingun className="login__icon" />
        <h3 className="login__title heading--3">
          Olinarom <span>| Login</span>
        </h3>
        <form onSubmit={loginHandler} className="login__form">
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="login__form--input"
            onChange={(e) => setUname(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="login__form--input"
            onChange={(e) => setPass(e.target.value)}
          />
          <button
            disabled={pending}
            type="submit"
            className="login__form--button login__form--button-login"
          >
            Login
          </button>

          {error && (
            <p className="login__form--fail">Wrong username or password</p>
          )}

          <Link
            to="/user/add"
            className="login__form--button login__form--button-signup"
          >
            SignUp
          </Link>
        </form>
      </div>
    </div>
  );
};
export default Login;
