import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { fetchLogin } from "../../store/actions/authActions";
import signUp from "../../helpers/signUp";
import PropTypes from "prop-types";

function SignUpMobile({ handleLogin, isOpen, setIsSignUpOpen, closeHamburgerMenu }) {
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
    console.log(data);
    signUp(data)
      .then(res => {
        handleLogin(usernameInput.current.value, passwordInput.current.value);
        usernameInput.current.value = "";
        passwordInput.current.value = "";
        passwordInput1.current.value = "";
        setIsSignUpOpen(false);
        closeHamburgerMenu();
      })
      .catch(error => {
        setformErrors(Object.values(error.response));
      });
  };

  return isOpen ? (
    <div className="signup-mobile is-open">
      <section className="signup-mobile-window">
        <img src={require("../../images/cheeseburger.png")} width="100px" height="100px" alt="Cheesburger logo" />
        <h3 className="signup-mobile-window__title">Zarejestruj się</h3>
        <form className="signup-mobile-form" onSubmit={handleSubmit}>
          <input
            className="signup-mobile-form__input"
            placeholder="Username"
            type="text"
            ref={usernameInput}
            required
          />
          <input
            className="signup-mobile-form__input"
            placeholder="Password"
            type="password"
            ref={passwordInput}
            required
          />
          <input
            className="signup-mobile-form__input"
            placeholder="Password1"
            type="password"
            ref={passwordInput1}
            required
          />
          <button className="signup-mobile-form__button" type="submit">
            <img width="24px" height="29px" src={require("../../images/log-in_icon.svg")} alt="Submit" />
          </button>
        </form>
        <div className="signup-mobile-form__error">{formErrors ? "Wpisz poprawne dane" : ""}</div>
      </section>
    </div>
  ) : null;
}

const mapStateToProps = state => ({
  error: state.auth.error,
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password) => dispatch(fetchLogin(username, password))
});

SignUpMobile.propTypes = {
  handleLogin: PropTypes.func,
  isOpen: PropTypes.bool,
  closeHamburgerMenu: PropTypes.func,
  setIsSignUpOpen: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpMobile);
