import { useEffect, useState } from 'react';
import { GiChaingun } from 'react-icons/gi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { updateCurrentUser } from '../redux/apiCalls';
import { updateError } from '../redux/userSlice';

const Login = () => {
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { error, pending } = useSelector((state) => state.user);

  useEffect(() => {
    pending === false && navigate('/users');
  }, [pending]);

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!uname || !pass) {
      setErrMsg('Username or password cannot be empty');
      dispatch(updateError());

      setAlertVisible(true);

      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
      return;
    }

    try {
      const resLogin = await axios.post('https://fakestoreapi.com/auth/login', {
        username: uname,
        password: pass,
      });

      updateCurrentUser(uname, resLogin.data.token, dispatch);
    } catch (error) {
      setErrMsg('Wrong username or password');
      dispatch(updateError());

      setAlertVisible(true);

      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
    }
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

          {alertVisible && error && <p className="error__message">{errMsg}</p>}

          <button
            disabled={pending}
            type="submit"
            className="login__form--button login__form--button-login"
          >
            Login
          </button>

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
