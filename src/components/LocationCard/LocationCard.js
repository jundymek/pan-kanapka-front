import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LocationCard.scss";
import MapForCard from "./MapForCard";
import { connect } from "react-redux";
import { removeLocation } from "../../store/actions/locationActions";
import { subscribeLocation } from "../../helpers/subscribeLocation";

function handleSubsctibeLocation(cardId, token, setSubscribedLocations) {
  subscribeLocation(cardId, token)
  setSubscribedLocations(prevState => [...prevState, cardId])
}


function CardButtons({ username, cardId, token, deleteLocation, setSubscribedLocations }) {
  console.log(cardId, token);
  if (username !== "admin") {
    return (
      <button className="locationCard__btn locationCard__btn--submit" onClick={() => handleSubsctibeLocation(cardId, token, setSubscribedLocations)}>
        Subscribe
      </button>
    );
  } else {
    return (
      <button className="locationCard__btn locationCard__btn--delete" onClick={() => deleteLocation(cardId, token)}>
        Delete
      </button>
    );
  }
}

function LocationCard(props) {
  
  console.log(props);
  console.log(props.card.id);
  return (
    <section className={props.isSubscribed ? "locationCard locationCard--subscribed" : "locationCard"} >
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
