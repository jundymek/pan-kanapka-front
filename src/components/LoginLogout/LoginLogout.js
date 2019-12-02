import React from "react";
import { connect } from "react-redux";
import "./LoginLogout.scss";
import { loginWindowHideShow } from "../../helpers/loginWindowHideShow";

function LoginLogout({ isAuthenticated, username }) {
  return (
    <div className="login-logout">
      {isAuthenticated ? `Hello ${username}` : <button onClick={() => loginWindowHideShow()}>Login</button>}
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.username
});

export default connect(mapStateToProps)(LoginLogout);
