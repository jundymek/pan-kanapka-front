import React, { useState } from "react";
import { connect } from "react-redux";
import { mobileMenuWindowHideShow } from "../../helpers/mobileMenuWindowHideShow";
import LogInMobile from "../LogInMobile/LogInMobile";

function HamburgerMenu(props) {
  const [isLogInOpen, setisLogInOpen] = useState(false)

  const handleOpen = () => {
    if (!isLogInOpen) {
      mobileMenuWindowHideShow();
    }
    setisLogInOpen(false)
  };

  const handleLogInFormOpen = () => {
    setisLogInOpen(true)
  }
  return (
    <div className="hamburger-wrapper">
      <button id="burger" className="open-hamburger-nav" onClick={handleOpen}>
        <span className="burger"></span>
        <span className="burger-text">Menu</span>
      </button>
      <nav className="hamburger-nav" id="hamburger-nav">
        <ul>
          <li>
            <button onClick={handleLogInFormOpen}>Zaloguj się</button>
            {/* <a href="#">Zaloguj się</a> */}
          </li>
          <li>
          <button >Zarejestruj się</button>
          </li>
        </ul>
      </nav>
      <LogInMobile isOpen={isLogInOpen}/>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.auth.username
});

export default connect(mapStateToProps)(HamburgerMenu);
