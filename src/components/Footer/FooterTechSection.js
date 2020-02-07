import React from "react";
export function FooterTechSection({ title, technologies, techClassModifier }) {
  return (
    <section>
      <h6 className={`footer__technologies-subtitle ${techClassModifier}`}>{title}</h6>
      <ul className="footer__list">
        {technologies.map((item,index) => (
          <li key={index} className="footer__list-item">
            <span className="footer__list-item-text">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
