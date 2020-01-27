import React from "react";
import { fetchLogout } from "../../store/actions/authActions";
import { connect } from "react-redux";

function Logged(props) {
  return (
    <div className="logged">
      <p className="logged__text">
        Zalogowany jako <span className="logged__username">{props.username}</span>
      </p>
      <button className="logged__logout-btn" onClick={() => props.handleLogout(props.token)}>
        <img src={require("../../images/log-out_icon.svg")} alt="Submit" />
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  handleLogout: token => dispatch(fetchLogout(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Logged);
