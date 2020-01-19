import React from "react";
import { sendNotification } from "../../helpers/sendNotification";
import { handleSubscribeLocation } from "./LocationCard";
export function CardButtons({
  username,
  cardId,
  isSubscribed,
  token,
  setSubscribedLocations,
  setcurrentLocationSubscriptionsCounter,
  setisModalOpen,
  setmodalStyle
}) {
  const handleDeleteLocation = () => {
    setisModalOpen(true);
    setmodalStyle("DeleteConfirmation");
  };

  if (username !== "admin") {
    return (
      <button
        className="locationCard__btn locationCard__btn--submit"
        title={!isSubscribed ? "Włącz powiadomienia" : "Wyłącz powiadomienia"}
        onClick={() =>
          handleSubscribeLocation(
            cardId,
            token,
            setSubscribedLocations,
            isSubscribed,
            setcurrentLocationSubscriptionsCounter,
            setisModalOpen,
            setmodalStyle
          )
        }
      >
        {!isSubscribed ? "Powiadamiaj" : "Nie powiadamiaj"}
      </button>
    );
  } else {
    return (
      <div className="locationCard__btn-wrapper">
        <button
          className="locationCard__btn locationCard__btn--delete"
          onClick={() => handleDeleteLocation(cardId, token)}
        >
          Usuń kartę
        </button>
        <button className="locationCard__btn locationCard__btn--submit" onClick={() => sendNotification(cardId, token)}>
          Powiadom
        </button>
      </div>
    );
  }
}
