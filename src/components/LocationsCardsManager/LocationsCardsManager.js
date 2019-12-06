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
  // loading: state.locations.loading,
  // error: state.locations.error,
  // token: state.auth.token,
  // username: state.auth.username,
  // isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(LocationsCardsManager);
