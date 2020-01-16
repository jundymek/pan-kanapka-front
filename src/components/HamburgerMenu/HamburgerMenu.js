import React, { useState } from "react";
import { connect } from "react-redux";
import { mobileMenuWindowHideShow } from "../../helpers/mobileMenuWindowHideShow";
import { signUpWindowHideShow } from "../../helpers/signUpWindowHideShow";
import { loginMobileWindowHideShow } from "../../helpers/loginMobileWindowHideShow";
import HamburgerLogged from "./HamburgerLogged";

function HamburgerMenu(props) {
  const handleOpen = () => {
    mobileMenuWindowHideShow();
  };

  const handleLogInFormOpen = () => {
    loginMobileWindowHideShow();
  };
  const handleSignUpFormOpen = () => {
    signUpWindowHideShow();
  };
  return (
    <div className="hamburger-wrapper">
      <button id="burger" className="open-hamburger-nav" onClick={handleOpen}>
        <span className="burger"></span>
        <span className="burger-text">Menu</span>
      </button>
      {props.username ? <HamburgerLogged closeHamburgerMenu={() => mobileMenuWindowHideShow()} /> : null}
      <nav className="hamburger-nav" id="hamburger-nav">
        <ul>
          {!props.username ? (
            <>
              <li>
                <button onClick={handleLogInFormOpen}>Zaloguj się</button>
              </li>
              <li>
                <button onClick={handleSignUpFormOpen}>Zarejestruj się</button>
              </li>
            </>
          ) : null}

          <li>
            <a href="#locations-cards" onClick={handleOpen}>
              Zobacz karty lokalizacji
            </a>
          </li>
          <li>
            <a href="#locations-cards" onClick={handleOpen}>
              Zobacz karty lokalizacji
            </a>
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
