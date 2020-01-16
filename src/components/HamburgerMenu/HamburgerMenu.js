import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { mobileMenuWindowHideShow } from "../../helpers/mobileMenuWindowHideShow";
import { signUpWindowHideShow } from "../../helpers/signUpWindowHideShow";
import { loginMobileWindowHideShow } from "../../helpers/loginMobileWindowHideShow";
import LogInMobile from "../LogInMobile/LogInMobile";
import SignUpWindow from "../SignUpWindow/SignUpWindow";
import { HamburgerMenuNav } from "./HamburgerMenuNav";

function HamburgerMenu(props) {
  const [isLoginWindowVisible, setisLoginWindowVisible] = useState(false);
  const [isSignupWindowVisible, setIsSignupWindowVisible] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  useEffect(() => {
    const loggedHamburger = document.querySelector(".hamburger-nav-logged");
    if (loggedHamburger) {
      loggedHamburger.classList.toggle("hamburger-nav-logged--is-open");
    }
    setisLoginWindowVisible(false);
  }, [props.username]);

  useEffect(() => {
    if (isMenuOpen) {
      mobileMenuWindowHideShow();
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isLoginWindowVisible) {
      loginMobileWindowHideShow();
    }
    if (isSignupWindowVisible) {
      signUpWindowHideShow();
    }
  }, [isLoginWindowVisible, isSignupWindowVisible]);

  const handleMobileMenuOpen = () => {
    if (isMenuOpen) {
      mobileMenuWindowHideShow();
      const loadWindow = async () => {
        await setisMenuOpen(!isMenuOpen);
      };
      loadWindow();
    } else {
      const loadWindow = async () => {
        await setisMenuOpen(!isMenuOpen);
      };
      loadWindow();
    }
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
      <button id="burger" className="open-hamburger-nav" onClick={handleMobileMenuOpen}>
        <span className="burger"></span>
        <span className="burger-text">Menu</span>
      </button>
      {isMenuOpen && (
        <HamburgerMenuNav
          username={props.username}
          handleLogInFormOpen={handleLogInFormOpen}
          handleSignUpWindowOpen={handleSignUpWindowOpen}
          handleMobileMenuOpen={handleMobileMenuOpen}
        />
      )}

      {isLoginWindowVisible && <LogInMobile setisLoginWindowVisible={setisLoginWindowVisible} />}
      {isSignupWindowVisible && <SignUpWindow setIsSignupWindowVisible={setIsSignupWindowVisible} />}
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.auth.username
});

export default connect(mapStateToProps)(HamburgerMenu);
