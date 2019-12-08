import React from "react";
import { connect } from "react-redux";
import { fetchLogout } from "../../store/actions/authActions";
import "./LoginLogout.scss";
import { loginWindowHideShow } from "../../helpers/loginWindowHideShow";

function LoginLogout({ isAuthenticated, username, handleLogout, token }) {
  return (
    <div className="login-logout">
      {isAuthenticated === 'true' ? (
        <div>
          <span>Logged as {username}</span>
          <button className="logout-button--js" onClick={() => handleLogout(token)}>Logout</button>
        </div>
      ) : (
        <button onClick={() => loginWindowHideShow()}>Login</button>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
    handleLogout: (token) => dispatch(fetchLogout(token))
  });

export default connect(mapStateToProps, mapDispatchToProps)(LoginLogout);
