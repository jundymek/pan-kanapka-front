import React from "react";
import { fetchLogout } from "../../store/actions/authActions";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import Logged from "./Logged";

function LoginFormHeader(props) {
  return (
    <>
      {props.username ? (
        <Logged />
      ) : (
        <LoginForm />
      )}
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
