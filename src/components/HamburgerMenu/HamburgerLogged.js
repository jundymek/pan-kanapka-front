import React from "react";
import { fetchLogout } from "../../store/actions/authActions";
import { connect } from "react-redux";

function HamburgerLogged(props) {
  const onLogout = () => {
    props.handleLogout(props.token);
  };
  return (
    <div className="hamburger-nav-logged">
      <p className="hamburger-nav-logged__text">
        Zalogowany jako <span className="hamburger-nav-logged__username">{props.username}</span>
      </p>
      <button className="hamburger-nav-logged__logout-btn" onClick={onLogout}>
        <img src={require("../../images/log-out_icon.svg")} alt="Submit" title="Wyloguj" />
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.auth.username,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  handleLogout: token => dispatch(fetchLogout(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(HamburgerLogged);
