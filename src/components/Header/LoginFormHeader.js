import React from "react";
import { fetchLogout } from "../../store/actions/authActions";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import Logged from "./Logged";
import Hamburger from "./Hamburger/Hamburger";

function LoginFormHeader(props) {
  return (
    <>
      <div className="login-section-desktop">
        {props.username ? (
          <Logged />
        ) : (
          <LoginForm />
        )}
      </div>
      <div className="login-section-mobile">
        <Hamburger />
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  handleLogout: token => dispatch(fetchLogout(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormHeader);
