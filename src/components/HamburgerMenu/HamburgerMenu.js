import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { mobileMenuWindowHideShow } from "../../helpers/mobileMenuWindowHideShow";
import { signUpWindowHideShow } from "../../helpers/signUpWindowHideShow";
import { loginMobileWindowHideShow } from "../../helpers/loginMobileWindowHideShow";
import LogInMobile from "../LogInMobile/LogInMobile";
import HamburgerLogged from "./HamburgerLogged";
import SignUpWindow from "../SignUpWindow/SignUpWindow";

function HamburgerMenu(props) {
  console.log(props);
  const [isLoginWindowVisible, setisLoginWindowVisible] = useState(false);
  const [isSignupWindowVisible, setIsSignupWindowVisible] = useState(false);

  useEffect(() => {
    setisLoginWindowVisible(false);
  }, [props.username]);

  useEffect(() => {
    if (isLoginWindowVisible) {
      loginMobileWindowHideShow();
    }
    if (isSignupWindowVisible) {
      signUpWindowHideShow();
    }
  }, [isLoginWindowVisible, isSignupWindowVisible]);

  const handleOpen = () => {
    mobileMenuWindowHideShow();
  };

  const handleLogInFormOpen = () => {
    const loadWindow = async () => {
      await setisLoginWindowVisible(true);
    };
    loadWindow();
  };
  const handleSignUpWindowOpen = () => {
    const loadWindow = async () => {
      await setIsSignupWindowVisible(true);
    };
    loadWindow();
  };
  return (
    <div className="hamburger-wrapper">
      <button id="burger" className="open-hamburger-nav" onClick={handleOpen}>
        <span className="burger"></span>
        <span className="burger-text">Menu</span>
      </button>
      {props.username && <HamburgerLogged />}
      <nav className="hamburger-nav" id="hamburger-nav">
        <ul>
          {!props.username ? (
            <>
              <li>
                <button onClick={handleLogInFormOpen}>Zaloguj się</button>
              </li>
              <li>
                <button onClick={handleSignUpWindowOpen}>Zarejestruj się</button>
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
      {isLoginWindowVisible && <LogInMobile setisLoginWindowVisible={setisLoginWindowVisible} />}
      {isSignupWindowVisible && <SignUpWindow setIsSignupWindowVisible={setIsSignupWindowVisible} />}
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.auth.username
});

export default connect(mapStateToProps)(HamburgerMenu);
