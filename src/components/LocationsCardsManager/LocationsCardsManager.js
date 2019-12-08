import React from "react";
import LocationCard from "../LocationCard/LocationCard";
import { LocationsCardsList } from "../LocationsCardsList/LocationsCardsList";
import { connect } from "react-redux";
import "./LocationsCardsManager.scss";

const renderLocationCard = (card, index) => {
  return <LocationCard key={index} card={card} />;
};
function LocationsCardsManager({ locations }) {
  return (
    <div className="locations-cards">
      <LocationsCardsList locations={locations} renderLocationCard={renderLocationCard} />
    </div>
  );
}

const mapStateToProps = state => ({
  locations: state.locations.locations
});

export default connect(mapStateToProps)(LocationsCardsManager);
