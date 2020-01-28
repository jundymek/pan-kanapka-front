import React from "react";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-border">
        <section className="footer">
          <h3 className="footer__title">Pan kanapka</h3>
          <p className="footer__paragraph">
            Projekt i wykonanie{" "}
            <span role="img" aria-label="author">
              👨‍💻
            </span>
            jundymek (Łukasz Dymek). Użyte technologie i narzędzia
            <span role="img" aria-label="technologies">
              🚀
            </span>
            : git, python, django, django-rest-framework, react (hooks), redux, leaflet, google places api, vs code,
            pycharm, figma, scss.{" "}
          </p>
          <p className="footer__paragraph">Skontaktuj się ze mną: jundymek - 2020 r.</p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
