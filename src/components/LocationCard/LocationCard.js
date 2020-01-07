import React, { useState } from "react";
import MapForCard from "./MapForCard";
import { connect } from "react-redux";
import { removeLocation } from "../../store/actions/locationActions";
import { subscribeLocation } from "../../helpers/subscribeLocation";
import { sendNotification } from "../../helpers/sendNotification";

function handleSubscribeLocation(
  cardId,
  token,
  setSubscribedLocations,
  isSubscribed,
  setcurrentLocationSubscriptionsCounter
) {
  subscribeLocation(cardId, token);
  if (!isSubscribed) {
    setSubscribedLocations(prevState => [...prevState, cardId]);
    setcurrentLocationSubscriptionsCounter(prevState => prevState + 1);
  } else {
    setSubscribedLocations(prevState => prevState.filter(id => id !== cardId));
    setcurrentLocationSubscriptionsCounter(prevState => prevState - 1);
  }
}

function CardButtons({
  username,
  cardId,
  isSubscribed,
  token,
  deleteLocation,
  setSubscribedLocations,
  setcurrentLocationSubscriptionsCounter
}) {
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
            setcurrentLocationSubscriptionsCounter
          )
        }
      >
        {!isSubscribed ? "Powiadamiaj" : "Nie powiadamiaj"}
      </button>
    );
  } else {
    return (
      <div className="locationCard__btn-wrapper">
        <button className="locationCard__btn locationCard__btn--delete" onClick={() => deleteLocation(cardId, token)}>
          Usuń kartę
        </button>
        <button className="locationCard__btn locationCard__btn--submit" onClick={() => sendNotification(cardId, token)}>
          Powiadom
        </button>
      </div>
    );
  }
}

function checkNumberOfSubscriptionsForCard(cardId, allSubscriptions) {
  return cardId in allSubscriptions ? allSubscriptions[cardId] : 0;
}

function LocationCard(props) {
  const [currentLocationSubscriptionsCounter, setcurrentLocationSubscriptionsCounter] = useState(
    checkNumberOfSubscriptionsForCard(props.card.id, props.numberSubscriptions)
  );
  return (
    <section className={props.isSubscribed ? "locationCard locationCard--subscribed" : "locationCard"}>
      <div
        className={
          props.isSubscribed
            ? "locationCard__title-wrapper locationCard__title-wrapper--subscribed"
            : "locationCard__title-wrapper"
        }
      >
        <div className="locationCard__clients-icon-wrapper" title="Liczba osób zapisanych na powiadomienia">
          <img className="locationCard__clients-icon" src={require("../../images/clients_icon.svg")} alt="Klienci" />
          <span className="locationCard__clients-icon-counter">{currentLocationSubscriptionsCounter}</span>
        </div>
        <h3 className="locationCard__title">{props.card.name}</h3>
        <div className="locationCard__address-wrapper">
          <i className="far fa-address-card locationCard__address--icon"></i>
          <p className="locationCard__address">{props.card.address}</p>
        </div>
      </div>
      <MapForCard location={props.card} />
      {props.token ? (
        <CardButtons
          cardId={props.card.id}
          deleteLocation={props.onRemoveLocation}
          username={props.username}
          token={props.token}
          setSubscribedLocations={props.setSubscribedLocations}
          isSubscribed={props.isSubscribed}
          setcurrentLocationSubscriptionsCounter={setcurrentLocationSubscriptionsCounter}
        />
      ) : (
        ""
      )}
    </section>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token,
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  onRemoveLocation: (locationId, token) => dispatch(removeLocation(locationId, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);
