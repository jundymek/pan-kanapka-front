import React, { useRef } from "react";
import { fetchLogin } from "../../store/actions/authActions";
import { connect } from "react-redux";
import "./LoginFormHeader.scss";

function LoginFormHeader(props) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log("login");
    // handleLogin(usernameInput.current.value, passwordInput.current.value);
    usernameInput.current.value = "";
    passwordInput.current.value = "";
  };

  return (
    <div>
      <form className="header-form" onSubmit={handleSubmit}>
        <div className="form-field-wrapper">
          <label htmlFor="name">Username</label>
          <input type="text" ref={usernameInput} />
        </div>
        <div className="form-field-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" ref={passwordInput} />
        </div>
        <button className="header-form__submit-btn" type="submit">Login</button>
      </form>
      <div>{props.error ? "Wpisz poprawne dane" : ""}</div>
    </div>
  );
}

const mapStateToProps = state => ({
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password) => dispatch(fetchLogin(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormHeader);
