import React, { useRef } from "react";
import { fetchLogin } from "../../store/actions/authActions";
import { connect } from "react-redux";
import "./LoginWindow.scss";
import { loginWindowHideShow } from "../../helpers/loginWindowHideShow";
import cheesburger from "../../images/cheeseburger.svg"

function LoginWindow({ handleLogin, error }) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    handleLogin(usernameInput.current.value, passwordInput.current.value);
    usernameInput.current.value = ''
    passwordInput.current.value = ''
  };

  return (
    <div className="login-wrapper">
      <section className="login">
        <button onClick={loginWindowHideShow} className="login__exit">X</button>
        <h3 className="login__title">Login</h3>
        <img className="login__image" src={cheesburger} alt="Cheesburger"/>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Username</label>
          <input className="login-form__input" type="text" ref={usernameInput} />
          <label htmlFor="password">Password</label>
          <input className="login-form__input" type="password" ref={passwordInput} />
          <button className="login-form__button" type="submit">
            Submit
          </button>
        </form>
        <div className="error">{error ? 'Wpisz poprawne dane' : ''}</div>
      </section>
    </div>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password) => dispatch(fetchLogin(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginWindow);
