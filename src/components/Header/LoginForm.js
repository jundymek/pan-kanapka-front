import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { fetchLogin } from "../../store/actions/authActions";
import { loginWindowHideShow } from "../../helpers/loginWindowHideShow";

function LoginForm(props) {
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
    console.log(props);
    usernameInput.current.value = "";
    passwordInput.current.value = "";
  };
  return (
    <div>
      {props.error && isLoginError && <p className="login-error-msg text-focus-in">Wpisz poprawne dane</p>}
      <form className="header-form" onSubmit={handleSubmit}>
        <div className="form-field-wrapper">
          <input
            onChange={() => setisLoginError(false)}
            placeholder="Username"
            className="header-form__input"
            type="text"
            ref={usernameInput}
            required
          />
          <input
            onChange={() => setisLoginError(false)}
            placeholder="Password"
            className="header-form__input"
            type="password"
            ref={passwordInput}
            required
          />
          <button className="header-form__submit-btn" type="submit">
            <img width="24px" height="29px" src={require("../../images/log-in_icon.svg")} alt="Submit" />
          </button>
        </div>
      </form>

      <div className="signup-wrapper">
        <p className="signup">
          Nie masz konta:{" "}
          <button className="signup__btn" onClick={() => loginWindowHideShow()}>
            Zarejestruj się
          </button>
        </p>
      </div>
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
