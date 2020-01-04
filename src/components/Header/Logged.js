import React from "react";
import { fetchLogout } from "../../store/actions/authActions";
import { connect } from "react-redux";

function Logged(props) {
  return (
    <div className="logged-wrapper">
      <span>Logged as {props.username}</span>
      <button className="logout-btn" onClick={() => props.handleLogout(props.token)}>
        Logout
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
