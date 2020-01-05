import React from "react";
import { connect } from "react-redux";
import { mobileMenuWindowHideShow } from "../../helpers/mobileMenuWindowHideShow";

function HamburgerMenu(props) {

  const handleOpen = () => {
    mobileMenuWindowHideShow();
  };
  return (
    <div className="hamburger-wrapper">
      <button id="burger" className="open-main-nav" onClick={handleOpen}>
        <span className="burger"></span>
        <span className="burger-text">Menu</span>
      </button>
      <nav className="main-nav" id="main-nav">
        <ul>
          <li>
            <a href="#">Zaloguj się</a>
          </li>
          <li>
            <a href="#">Zarejestruj się</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.auth.username
});

export default connect(mapStateToProps)(HamburgerMenu);
