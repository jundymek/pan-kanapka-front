import React, { useState } from "react";
import "./LocationCard.scss";
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
        {!isSubscribed ? "Subscribe" : "Unsubscribe"}
      </button>
    );
  } else {
    return (
      <div className="locationCard__btn-wrapper">
        <button className="locationCard__btn locationCard__btn--delete" onClick={() => deleteLocation(cardId, token)}>
          Delete
        </button>
        <button className="locationCard__btn locationCard__btn--submit" onClick={() => sendNotification(cardId, token)}>
          Send notification
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
      <div className="locationCard__title-wrapper">
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
      <p>Number of subscriptions: {currentLocationSubscriptionsCounter}</p>
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
