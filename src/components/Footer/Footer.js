import React from "react";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-border">
        <section className="footer">
          <div className="footer__technologies-wrapper">
          <h5 className="footer__technologies-title">Pan Kanapka</h5>
            <div className="footer__technologies">
              <div>
                <h6 className="footer__technologies-subtitle footer__technologies-subtitle--backend">Backend</h6>
                <ul className="footer__technologies-list">
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">python</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">django</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">django-rest-framework</span>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="footer__technologies-subtitle footer__technologies-subtitle--frontend">Frontend</h6>
                <ul className="footer__technologies-list">
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">html, js</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">css (sass, bem)</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">react</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">redux</span>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="footer__technologies-subtitle footer__technologies-subtitle--tools">Narzędzia</h6>
                <ul className="footer__technologies-list">
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">git</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">pycharm</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">vs code</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">figma</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">heroku</span>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="footer__technologies-subtitle footer__technologies-subtitle--libraries">Biblioteki</h6>
                <ul className="footer__technologies-list">
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">leaflet</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">django-rest-auth</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">django-push-notifications</span>
                  </li>
                  <li className="footer__technologies-list-element">
                    <span class="footer__technologies-list-element-text">google places api</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="footer__paragraph">Projekt i wykonanie: <a class="footer__link" href="https://github.com/jundymek">jundymek</a> - 2020 r.</p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
