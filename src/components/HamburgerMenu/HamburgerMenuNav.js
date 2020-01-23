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
            <a href="#map" onClick={props.handleMobileMenuOpen}>
              Mapa
            </a>
          </li>
          <li>
            <a href="#locations-cards" onClick={props.handleMobileMenuOpen}>
              Karty lokalizacji
            </a>
          </li>
          {props.username && props.username === "admin" && (
            <li>
              <a href="#add-new-location" onClick={props.handleMobileMenuOpen}>
                Dodaj nową lokalizację
              </a>
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
}
