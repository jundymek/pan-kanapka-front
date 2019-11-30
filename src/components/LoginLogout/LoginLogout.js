import React, { useRef } from "react";
import { fetchLogin } from "../../store/actions/authActions";
import { connect } from "react-redux";

function LoginLogout({handleLogin}) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

    const handleSubmit = e => {
        e.preventDefault()
        handleLogin(usernameInput.current.value, passwordInput.current.value)
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={usernameInput} />
        username
        <input type="password" ref={passwordInput} />
        password
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password) => dispatch(fetchLogin(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginLogout);
