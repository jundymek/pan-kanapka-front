import React, { useState, useRef } from "react";
import { fetchLogin } from "../../store/actions/authActions";
import { connect } from "react-redux";
import { signUpWindowHideShow } from "../../helpers/signUpWindowHideShow";
import cheesburger from "../../images/cheeseburger.svg";
import signUp from "../../helpers/signUp";
import Button from "../Button/Button";

function SignUpWindow({ handleLogin, setIsSignupWindowVisible }) {
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
        signUpWindowHideShow();
        usernameInput.current.value = "";
        passwordInput.current.value = "";
        passwordInput1.current.value = "";
      })
      .catch(error => {
        setformErrors(Object.values(error.response.data));
      });
  };

  return (
    <section className="signUp signUp--js">
      <button id="burger" className="open-hamburger-nav is-open" onClick={() => setIsSignupWindowVisible(false)}>
        <span className="burger"></span>
        <span className="burger-text">Menu</span>
      </button>
      <img className="signUp__image" src={cheesburger} alt="Cheesburger" />
      <h3 className="signUp__title">Zarejestruj się</h3>
      <form className="signUp-form" onSubmit={handleSubmit}>
        <div className="signUp-form__input-wrapper signUp-form__input-wrapper--username">
          <input
            aria-label="username input field"
            className="signUp-form__input signUp-form__input--username"
            placeholder="Nazwa użytkownika"
            type="text"
            ref={usernameInput}
            required
          />
        </div>
        <div className="signUp-form__input-wrapper signUp-form__input-wrapper--password">
          <input
            aria-label="password input field"
            className="signUp-form__input signUp-form__input--password"
            placeholder="Hasło (minimum 8 znaków)"
            type="password"
            ref={passwordInput}
            minLength="8"
            required
          />
        </div>
        <div className="signUp-form__input-wrapper signUp-form__input-wrapper--password1">
          <input
            aria-label="password confirmation input field"
            className="signUp-form__input signUp-form__input--password1"
            placeholder="Powtórz hasło"
            type="password"
            minLength="8"
            ref={passwordInput1}
            required
          />
        </div>
        {formErrors && <div className="signUp-form__error signUp-form__error--js blink-1">{formErrors}</div>}
        <div className="login-signup-mobile-button-wrapper login-signup-mobile-button-wrapper--signup">
          <Button variant="mobile" />
        </div>
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
