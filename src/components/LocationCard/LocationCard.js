import React, { useState } from "react";
import Modal from "react-modal";
import MyModal from "../Modal/Modal"
import MapForCard from "./MapForCard";
import { connect } from "react-redux";
import { removeLocation } from "../../store/actions/locationActions";
import { subscribeLocation } from "../../helpers/subscribeLocation";
import { CardButtons } from "./CardButtons";

export function handleSubscribeLocation(
  cardId,
  token,
  setSubscribedLocations,
  isSubscribed,
  setcurrentLocationSubscriptionsCounter,
  setisModalOpen,
  setmodalStyle
) {
  subscribeLocation(cardId, token);
  if (!isSubscribed) {
    setSubscribedLocations(prevState => [...prevState, cardId]);
    setcurrentLocationSubscriptionsCounter(prevState => prevState + 1);
    setisModalOpen(true)
    setmodalStyle("Subscribed")
  } else {
    setSubscribedLocations(prevState => prevState.filter(id => id !== cardId));
    setcurrentLocationSubscriptionsCounter(prevState => prevState - 1);
    setisModalOpen(true)
    setmodalStyle("Unsubscribed")
  }
}

function checkNumberOfSubscriptionsForCard(cardId, allSubscriptions) {
  return cardId in allSubscriptions ? allSubscriptions[cardId] : 0;
}

function LocationCard(props) {
  console.log(props)
  const [currentLocationSubscriptionsCounter, setcurrentLocationSubscriptionsCounter] = useState(
    checkNumberOfSubscriptionsForCard(props.card.id, props.numberSubscriptions)
  );
  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalStyle, setmodalStyle] = useState(null)

  Modal.setAppElement('.App')
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
          <img className="locationCard__address--icon" src={require("../../images/address_icon.svg")} alt="Adres" />
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
          setisModalOpen={setisModalOpen}
          setmodalStyle={setmodalStyle}
        />
      ) : (
        ""
      )}
      {isModalOpen && 
      <MyModal
          isModalOpen={isModalOpen}
          modalStyle={modalStyle}
          loactionName={props.card.name}
          setisModalOpen={setisModalOpen}
        >
      </MyModal>
      }
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
