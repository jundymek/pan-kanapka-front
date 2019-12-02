import React from "react";
import { connect } from "react-redux";
import "./LoginLogout.scss";

function LoginLogout({ isAuthenticated, username }) {
  console.log(username);
  function handleLogin() {
    const form = document.querySelector(".login-wrapper");
    const mainApp = document.querySelector(".App");
    form.classList.add("login-wrapper--active");
    mainApp.classList.add("App--blurred");
    console.log(form);
  }
  return (
    <div className="login-logout">
      {isAuthenticated ? `Hello` : <button onClick={() => handleLogin()}>Login</button>}
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.username
});

export default connect(mapStateToProps)(LoginLogout);
