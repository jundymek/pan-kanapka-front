import React from "react";
import { FooterTechSection } from "./FooterTechSection";

function Footer() {
  const techSections = [
    {
      title: "Backend",
      technologies: ["python", "django", "django-rest-framework"],
      techClassModifier: "footer__technologies-subtitle--backend"
    },
    {
      title: "Frontend",
      technologies: ["html, js", "css (sass, bem)", "react", "redux"],
      techClassModifier: "footer__technologies-subtitle--frontend"
    },
    {
      title: "Narzędzia",
      technologies: ["git", "pycharm", "vs code", "figma", "heroku"],
      techClassModifier: "footer__technologies-subtitle--tools"
    },
    {
      title: "Biblioteki",
      technologies: ["leaflet", "django-rest-auth", "django-push-notifications", "google places api"],
      techClassModifier: "footer__technologies-subtitle--libraries"
    }
  ];

  return (
    <div className="footer-wrapper">
      <div className="footer-border">
        <footer className="footer">
          <div className="footer__technologies-wrapper">
            <h5 className="footer__technologies-title">Pan Kanapka</h5>
            <article className="footer__technologies">
              {techSections.map(item => (
                <FooterTechSection
                  title={item.title}
                  technologies={item.technologies}
                  techClassModifier={item.techClassModifier}
                />
              ))}
            </article>
          </div>
          <p className="footer__paragraph">
            Projekt i wykonanie:
            <a className="footer__link" href="https://github.com/jundymek">
              jundymek
            </a>
            - 2020 r.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
