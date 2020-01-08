import React from "react";
import LoginFormHeader from "./LoginFormHeader";

function Header(props) {
  return (
    <section className="header header--js">
      <div className="header-logo">
        <img src={require("../../images/cheeseburger.svg")} width="100px" height="100px" alt="Cheesburger logo" />
        <h1 className="header-logo__title">Pan Kanapka</h1>
      </div>
      <LoginFormHeader />
    </section>
  );
}

export default Header;
