import React, { useState, useRef } from "react";
import { fetchLogin } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { loginWindowHideShow } from "../../helpers/loginWindowHideShow";
import cheesburger from "../../images/cheeseburger.svg";
import signUp from "../../helpers/signUp";

function SignUpWindow({ handleLogin }) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const passwordInput1 = useRef(null);
  const [formErrors, setformErrors] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      username: usernameInput.current.value,
      email: "",
      password1: passwordInput.current.value,
      password2: passwordInput1.current.value
    };

    signUp(data)
      .then(res => {
        handleLogin(usernameInput.current.value, passwordInput.current.value);
        loginWindowHideShow()
        usernameInput.current.value = "";
        passwordInput.current.value = "";
        passwordInput1.current.value = "";
      })
      .catch(error => {
        setformErrors(Object.values(error.response.data));
      });
  };

  return (
    <div className="signUp-wrapper signUp-wrapper--js">
      <section className="signUp">
        <button onClick={loginWindowHideShow} className="signUp__exit">
          X
        </button>
        <h3 className="signUp__title">Zarejestruj się</h3>
        <img className="signUp__image" src={cheesburger} alt="Cheesburger" />
        <form className="signUp-form" onSubmit={handleSubmit}>
          <label className="signUp-form__label" htmlFor="name">
            Username
          </label>
          <input className="signUp-form__input" type="text" ref={usernameInput} required />
          <label className="signUp-form__label" htmlFor="password">
            Password
          </label>
          <input className="signUp-form__input" type="password" ref={passwordInput} required />
          <label className="signUp-form__label" htmlFor="password1">
            Password1
          </label>
          <input className="signUp-form__input" type="password" ref={passwordInput1} required />
          <button className="signUp-form__button" type="submit">
            Zarejestruj się
          </button>
        </form>
        <div className="error">{formErrors ? "Wpisz poprawne dane" : ""}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpWindow);
