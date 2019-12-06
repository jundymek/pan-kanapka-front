import React from "react";
import "./LocationCard.scss";
import MapForCard from "./MapForCard";
import { connect } from "react-redux";
import { removeLocation } from "../../store/actions/locationActions";
import { subscribeLocation } from "../../helpers/subscribeLocation";

const card = {
  id: 49,
  name: "Plaza Tower",
  address: "Prosta, Prosta, Warsaw, Poland",
  latitude: 52.2312922,
  longitude: 20.988439599999992
};

function LocationCard(props) {
  console.log(props.token);
  return (
    <section className="locationCard">
      <div className="locationCard__title-wrapper">
        <h3 className="locationCard__title">{card.name}</h3>
      </div>
      <MapForCard location={card} />
      <button className="locationCard__btn-submit" onClick={() => subscribeLocation(card.id, props.token)}>Subscribe
          <div className="locationCard__btn-submit-inner"></div>
      </button>
    </section>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  onRemoveLocation: locationId => dispatch(removeLocation(locationId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);
