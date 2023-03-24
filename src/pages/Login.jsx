import { GiChaingun } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="login__card">
        <GiChaingun className="login__icon" />
        <h3 className="login__title heading--3">
          Olinarom <span>| Login</span>
        </h3>
        <form className="login__form">
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            className="login__form--input"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="login__form--input"
          />
          <button
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
