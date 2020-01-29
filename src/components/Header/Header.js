import React from "react";
import LoginFormHeader from "./LoginFormHeader";

function Header(props) {
  return (
    <header className="header header--js">
      <div className="header-logo">
        <a className="header-logo__image-link" href="/"><img className="header-logo__image" src={require("../../images/cheeseburger.svg")}  alt="Cheesburger logo" /></a>
        <h1 className="header-logo__title">Pan Kanapka</h1>
      </div>
      <LoginFormHeader />
    </header>
  );
}

export default Header;
