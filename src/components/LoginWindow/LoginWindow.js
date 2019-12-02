import React, { useRef } from "react";
import { fetchLogin } from "../../store/actions/authActions";
import { connect } from "react-redux";
import "./LoginWindow.scss";

function LoginWindow({ handleLogin }) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin(usernameInput.current.value, passwordInput.current.value);
  };

  const handleExit = () => {
    const form = document.querySelector(".login-wrapper")
    const mainApp = document.querySelector(".App");
    form.classList.remove('login-wrapper--active')
    mainApp.classList.remove("App--blurred");
  }

  return (
    <div className="login-wrapper">
      <section className="login">
        <button onClick={handleExit} className="login__exit">X</button>
        <h3 className="login__title">Login</h3>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Username</label>
          <input type="text" ref={usernameInput} />
          <label htmlFor="password">Password</label>
          <input type="password" ref={passwordInput} />
          <button className="login-form__button" type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password) => dispatch(fetchLogin(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginWindow);
