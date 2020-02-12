import React from "react";
import HamburgerLogged from "./HamburgerLogged";

export function HamburgerMenuNav(props) {
  return (
    <>
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
          <li>
            <a href="#menu" onClick={props.handleMobileMenuOpen}>
              Menu Pana Kanapki
            </a>
          </li>
          <li>
            <a href="#faq" onClick={props.handleMobileMenuOpen}>
              O aplikacji
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
    </>
  );
}
