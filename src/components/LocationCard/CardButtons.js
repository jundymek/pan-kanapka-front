import React from "react";
import { sendNotification } from "../../helpers/sendNotification";
import { handleSubscribeLocation } from "./LocationCard";
import Button from "../Button/Button";
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
      <Button
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
        label={!isSubscribed ? "Powiadamiaj" : "Nie powiadamiaj"}
        variant="submit"
      />
    );
  } else {
    return (
      <div className="locationCard__btn-wrapper">
        <Button onClick={() => handleDeleteLocation(cardId, token)} label="Usuń kartę" variant="delete" />
        <Button onClick={() => sendNotification(cardId, token)} label="Powiadom" variant="submit" />
      </div>
    );
  }
}
