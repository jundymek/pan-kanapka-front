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
        loginWindowHideShow();
        usernameInput.current.value = "";
        passwordInput.current.value = "";
        passwordInput1.current.value = "";
      })
      .catch(error => {
        const errorField = document.querySelector(".signUp-form__error--js");
        errorField.classList.toggle("signUp-form__error--active");
        setformErrors(Object.values(error.response.data));
      });
  };

  return (
    <section className="signUp signUp--js">
      <button onClick={loginWindowHideShow} className="signUp__exit">
        <img src={require("../../images/exit_icon.svg")} alt="Wyjście" />
      </button>
      <img className="signUp__image" src={cheesburger} alt="Cheesburger" />
      <h3 className="signUp__title">Zarejestruj się</h3>
      <form className="signUp-form" onSubmit={handleSubmit}>
        <input
          className="signUp-form__input"
          placeholder="Nazwa użytkownika"
          type="text"
          ref={usernameInput}
          required
        />
        <input className="signUp-form__input" placeholder="Hasło" type="password" ref={passwordInput} required />
        <input
          className="signUp-form__input"
          placeholder="Powtórz hasło"
          type="password"
          ref={passwordInput1}
          required
        />
        <div className="signUp-form__error signUp-form__error--js">{formErrors ? "Wpisz poprawne dane" : ""}</div>
        <button className="signUp-form__button" type="submit">
          Zarejestruj się
        </button>
      </form>
    </section>
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
