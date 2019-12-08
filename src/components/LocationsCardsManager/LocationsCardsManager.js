import React, { useEffect } from "react";
import LocationCard from "../LocationCard/LocationCard";
import { LocationsCardsList } from "../LocationsCardsList/LocationsCardsList";
import { connect } from "react-redux";
import "./LocationsCardsManager.scss";
import { fetchLocations } from "../../store/actions/locationActions";

const renderLocationCard = (card, index) => {
  return <LocationCard key={index} card={card} />;
};

function LocationsCardsManager(props) {
  useEffect(() => {
    props.onFetchLocations();
  }, []);

  return (
    <div className="locations-cards">
      <LocationsCardsList locations={props.locations} renderLocationCard={renderLocationCard} />
    </div>
  );
}

const mapStateToProps = state => ({
  locations: state.locations.locations
});

const mapDispatchToProps = dispatch => ({
  onFetchLocations: () => dispatch(fetchLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsCardsManager);
