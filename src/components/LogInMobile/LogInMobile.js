import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchLogin } from "../../store/actions/authActions";
import { loginMobileWindowHideShow } from "../../helpers/loginMobileWindowHideShow";
import cheesburger from "../../images/cheeseburger.svg";
import PropTypes from "prop-types";

function LogInMobile(props) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const [isLoginError, setisLoginError] = useState(false);

  console.log(isLoginError);

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
      <button id="burger" className="open-hamburger-nav is-open" onClick={loginMobileWindowHideShow}>
        <span className="burger"></span>
        <span className="burger-text">Menu</span>
      </button>
      <img className="loginMobile__image" src={cheesburger} alt="Cheesburger" />
      <h3 className="loginMobile__title">Zaloguj się</h3>
      <form className="loginMobile-form" onSubmit={handleSubmit}>
        <input
          onChange={() => setisLoginError(false)}
          className="loginMobile-form__input"
          placeholder="Nazwa użytkownika"
          type="text"
          ref={usernameInput}
          required
        />
        <input
          onChange={() => setisLoginError(false)}
          className="loginMobile-form__input"
          placeholder="Hasło"
          type="password"
          ref={passwordInput}
          required
        />
        {/* <div className="loginMobile-form__error loginMobile-form__error--js">{formErrors ? "Wpisz poprawne dane" : ""}</div> */}
        <button className="loginMobile-form__button" type="submit">
          Zaloguj się
        </button>
      </form>
      {props.error && isLoginError && (
        <p className="loginMobile-error-msg text-focus-in">Nazwa użytkownika lub hasło nie są poprawne</p>
      )}
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
