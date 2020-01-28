import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLogin } from "../../store/actions/authActions";
import { signUpWindowHideShow } from "../../helpers/signUpWindowHideShow";
import SignUpWindow from "../SignUpWindow/SignUpWindow";

function LoginForm(props) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const [isLoginError, setisLoginError] = useState(false);
  const [isSignupWindowVisible, setIsSignupWindowVisible] = useState(false);

  useEffect(() => {
    setisLoginError(prevState => !prevState);
  }, [props.error]);

  useEffect(() => {
    if (isSignupWindowVisible) {
      signUpWindowHideShow();
    }
  }, [isSignupWindowVisible]);

  const handleSubmit = e => {
    e.preventDefault();
    props.handleLogin(usernameInput.current.value, passwordInput.current.value);
    usernameInput.current.value = "";
    passwordInput.current.value = "";
  };

  const handleSignUpWindowOpen = () => {
    const loadWindow = async () => {
      await setIsSignupWindowVisible(true);
    };
    loadWindow();
  };
  return (
    <div>
      {props.error && isLoginError && (
        <p className="login-error-msg blink-1">Nazwa użytkownika lub hasło nie są poprawne</p>
      )}
      <form className="header-form" onSubmit={handleSubmit}>
        <div className="form-field-wrapper">
          <div className="header-form__input-wrapper header-form__input-wrapper--username">
            <input
              aria-label="username input field"
              onChange={() => setisLoginError(false)}
              placeholder="Username"
              className="header-form__input"
              type="text"
              ref={usernameInput}
              required
            />
          </div>
          <div className="header-form__input-wrapper header-form__input-wrapper--password">
            <input
              aria-label="password input field"
              onChange={() => setisLoginError(false)}
              placeholder="Password"
              className="header-form__input header-form__input--password"
              type="password"
              ref={passwordInput}
              required
            />
          </div>
          <button className="header-form__submit-btn" type="submit">
            <img width="24px" height="29px" src={require("../../images/log-in_icon.svg")} alt="Submit" />
          </button>
        </div>
      </form>

      <div className="signup-wrapper">
        <p className="signup">
          Nie masz konta:{" "}
          <button className="signup__btn" onClick={handleSignUpWindowOpen}>
            Zarejestruj się
          </button>
        </p>
      </div>
      {isSignupWindowVisible && <SignUpWindow setIsSignupWindowVisible={setIsSignupWindowVisible} />}
    </div>
  );
}

const mapStateToProps = state => ({
  error: state.auth.error,
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password) => dispatch(fetchLogin(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
