import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import Logged from "./Logged";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

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
        <HamburgerMenu />
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  username: state.auth.username
});

export default connect(mapStateToProps)(LoginFormHeader);
