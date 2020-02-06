import React from "react";
export function FaqStep(props) {
  const addWrapperClass = stepNumber => {
    switch (stepNumber) {
      case 1:
        return `steps__block-wrapper steps__block-wrapper--first`;
      case 3:
        return `steps__block-wrapper steps__block-wrapper--third`;
      default:
        return `steps__block-wrapper`;
    }
  };
  return (
    <div className={addWrapperClass(props.stepNumber)}>
      <div className={props.stepNumber === 3 ? `steps__block steps__block--third` : `steps__block`}>
        <img src={props.icon} alt={props.iconAltText} />
      </div>
      <span className="steps__counter">Krok {props.stepNumber}</span>
      <h5 className="steps__title">{props.stepTitle}</h5>
      <p className="steps__paragraph">{props.stepText}</p>
      <img className="steps__image" src={props.stepImage} alt={props.stepImageAlt} />
    </div>
  );
}
