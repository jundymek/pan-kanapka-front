import React, { useRef } from "react";
import { connect } from "react-redux";
import { fetchLogin } from "../../store/actions/authActions";
import PropTypes from 'prop-types';

function LogInMobile(props) {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
//   console.log(props.closeHamburgerMenu())

  const handleSubmit = e => {
    e.preventDefault();
    props.handleLogin(usernameInput.current.value, passwordInput.current.value);
    usernameInput.current.value = "";
    passwordInput.current.value = "";
    props.setisLogInOpen(false)
    props.closeHamburgerMenu()
  };

  console.log(props.isOpen);
  return props.isOpen ? (
    <div className="login-mobile">
      <section className="login-mobile-window">
        <img src={require("../../images/cheeseburger.png")} width="100px" height="100px" alt="Cheesburger logo" />
        <h2 className="login-mobile-window__title">Zaloguj się</h2>
        <form className="login-mobile-form" onSubmit={handleSubmit}>
          <input className="login-mobile-form__input" placeholder="Username" type="text" ref={usernameInput} required />
          <input
            className="login-mobile-form__input"
            placeholder="Password"
            type="password"
            ref={passwordInput}
            required
          />
          <button className="login-mobile-form__button" type="submit">
            <img width="24px" height="29px" src={require("../../images/log-in_icon.svg")} alt="Submit" />
          </button>
        </form>
        <div className="login-mobile-form__error">{props.error ? "Wpisz poprawne dane" : ""}</div>
      </section>
    </div>
  ) : null;
}

const mapStateToProps = state => ({
  error: state.auth.error,
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  handleLogin: (username, password) => dispatch(fetchLogin(username, password))
});

LogInMobile.propTypes = {
    closeHamburgerMenu: PropTypes.func,
    setisLogInOpen: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInMobile);
