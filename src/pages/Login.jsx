const Login = () => {
  return (
    <div className="login">
      <h1 className="login__title">
        Olinarom <span>| Login</span>
      </h1>
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
        <button className="login__form--button">Login</button>
      </form>
    </div>
  );
};
export default Login;
