import React, { useRef } from "react";
import { connect } from "react-redux";
import { fetchLogin } from "../../store/actions/authActions";
import { loginWindowHideShow } from "../../helpers/loginWindowHideShow";

function LoginForm(props) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    props.handleLogin(usernameInput.current.value, passwordInput.current.value);
    usernameInput.current.value = "";
    passwordInput.current.value = "";
  };
  return (
    <div>
      <form className="header-form" onSubmit={handleSubmit}>
        <div className="form-field-wrapper">
          <input placeholder="Username" className="header-form__input" type="text" ref={usernameInput} required />
          <input placeholder="Password" className="header-form__input" type="password" ref={passwordInput} required />
        <button className="header-form__submit-btn" type="submit">
          <img width="24px" height="29px" src={require("../../images/log-in_icon.svg")} alt="Submit"/>
        </button>
        </div>
      </form>
      <div>{props.error ? "Wpisz poprawne dane" : ""}</div>
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
