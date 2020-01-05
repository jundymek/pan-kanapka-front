import React, { useState } from "react";
import { connect } from "react-redux";
import { mobileMenuWindowHideShow } from "../../helpers/mobileMenuWindowHideShow";
import LogInMobile from "../LogInMobile/LogInMobile";
import SignUpMobile from "../SignUpMobile/SignUpMobile";

function HamburgerMenu(props) {
  const [isLogInOpen, setisLogInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  console.log(isSignUpOpen)

  const handleOpen = () => {
    if (!isLogInOpen && !isSignUpOpen) {
      mobileMenuWindowHideShow();
    }
    setisLogInOpen(false)
    setIsSignUpOpen(false)
  };

  const handleLogInFormOpen = () => {
    setisLogInOpen(true)
  }
  const handleSignUpFormOpen = () => {
    setIsSignUpOpen(true)
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
          </li>
          <li>
          <button onClick={handleSignUpFormOpen}>Zarejestruj się</button>
          </li>
          <li>
            <a href="#locations-cards" onClick={handleOpen}>Zobacz karty lokalizacji</a>
          </li>
        </ul>
      </nav>
      <LogInMobile isOpen={isLogInOpen}/>
      <SignUpMobile isOpen={isSignUpOpen}/>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.auth.username
});

export default connect(mapStateToProps)(HamburgerMenu);
