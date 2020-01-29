import React from "react";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-border">
        <footer className="footer">
          <div className="footer__technologies-wrapper">
          <h5 className="footer__technologies-title">Pan Kanapka</h5>
            <div className="footer__technologies">
              <div>
                <h6 className="footer__technologies-subtitle footer__technologies-subtitle--backend">Backend</h6>
                <ul className="footer__list">
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">python</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">django</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">django-rest-framework</span>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="footer__technologies-subtitle footer__technologies-subtitle--frontend">Frontend</h6>
                <ul className="footer__list">
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">html, js</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">css (sass, bem)</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">react</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">redux</span>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="footer__technologies-subtitle footer__technologies-subtitle--tools">Narzędzia</h6>
                <ul className="footer__list">
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">git</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">pycharm</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">vs code</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">figma</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">heroku</span>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="footer__technologies-subtitle footer__technologies-subtitle--libraries">Biblioteki</h6>
                <ul className="footer__list">
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">leaflet</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">django-rest-auth</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">django-push-notifications</span>
                  </li>
                  <li className="footer__list-item">
                    <span class="footer__list-item-text">google places api</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="footer__paragraph">Projekt i wykonanie: <a class="footer__link" href="https://github.com/jundymek">jundymek</a> - 2020 r.</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
