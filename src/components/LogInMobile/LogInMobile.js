import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchLogin } from "../../store/actions/authActions";
import cheesburger from "../../images/cheeseburger.svg";
import PropTypes from "prop-types";
import Button from "../Button/Button";

function LogInMobile(props) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const [isLoginError, setisLoginError] = useState(false);

  useEffect(() => {
    setisLoginError(prevState => !prevState);
  }, [props.error]);

  const handleSubmit = e => {
    e.preventDefault();
    props.handleLogin(usernameInput.current.value, passwordInput.current.value);
    usernameInput.current.value = "";
    passwordInput.current.value = "";
  };

  return (
    <section className="loginMobile loginMobile--js">
      <button id="burger" className="open-hamburger-nav is-open" onClick={() => props.setisLoginWindowVisible(false)}>
        <span className="burger"></span>
        <span className="burger-text">Menu</span>
      </button>
      <img className="loginMobile__image" src={cheesburger} alt="Cheesburger" />
      <h3 className="loginMobile__title">Zaloguj się</h3>
      {props.error && isLoginError && (
        <p className="loginMobile-error-msg blink-1">Nazwa użytkownika lub hasło nie są poprawne</p>
      )}
      <form className="loginMobile-form" onSubmit={handleSubmit}>
        <div className="loginMobile-form__input-wrapper loginMobile-form__input-wrapper--username">
          <input
            aria-label="username input field"
            onChange={() => setisLoginError(false)}
            className="loginMobile-form__input loginMobile-form__input--username"
            placeholder="Nazwa użytkownika"
            type="text"
            ref={usernameInput}
            required
          />
        </div>
        <div className="loginMobile-form__input-wrapper loginMobile-form__input-wrapper--password">
          <input
            aria-label="password input field"
            onChange={() => setisLoginError(false)}
            className="loginMobile-form__input loginMobile-form__input--password"
            placeholder="Hasło"
            type="password"
            ref={passwordInput}
            required
          />
        </div>
        <div className="login-signup-mobile-button-wrapper">
          <Button variant="mobile" />
        </div>
      </form>
    </section>
  );
}

const mapStateToProps = state => ({
  error: state.auth.error,
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password) => dispatch(fetchLogin(username, password))
});

LogInMobile.propTypes = {
  closeHamburgerMenu: PropTypes.func,
  setisLogInOpen: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInMobile);
