import React from "react";
import HamburgerLogged from "./HamburgerLogged";

export function HamburgerMenuNav(props) {
  return (
    <section>
      {props.username && <HamburgerLogged />}
      <nav className="hamburger-nav" id="hamburger-nav">
        <ul>
          {!props.username ? (
            <>
              <li>
                <button onClick={props.handleLogInFormOpen}>Zaloguj się</button>
              </li>
              <li>
                <button onClick={props.handleSignUpWindowOpen}>Zarejestruj się</button>
              </li>
            </>
          ) : null}

          <li>
            <a href="#locations-cards" onClick={props.handleMobileMenuOpen}>
              Zobacz karty lokalizacji
            </a>
          </li>
          <li>
            <a href="#locations-cards" onClick={props.handleMobileMenuOpen}>
              Zobacz karty lokalizacji
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
