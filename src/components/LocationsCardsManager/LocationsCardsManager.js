import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationCard from "../LocationCard/LocationCard";
import { LocationsCardsList } from "../LocationsCardsList/LocationsCardsList";
import { connect } from "react-redux";
import "./LocationsCardsManager.scss";
import { fetchLocations } from "../../store/actions/locationActions";
import runServiceWorker from "../../helpers/runServiceWorker";

const renderLocationCard = (card, index, isSubscribed, setSubscribedLocations) => {
  return (
    <LocationCard setSubscribedLocations={setSubscribedLocations} key={index} card={card} isSubscribed={isSubscribed} />
  );
};

function LocationsCardsManager(props) {
  const [subscribedLocations, setSubscribedLocations] = useState([]);

  useEffect(() => {
    props.onFetchLocations();
  }, []);

  useEffect(() => {
    if (props.token) {
      runServiceWorker(props.token, props.username);
    }
  }, [props.token, props.username]);

  useEffect(() => {}, [subscribedLocations]);

  useEffect(() => {
    if (props.token && props.username !== "admin") {
      axios
        .get(`http://127.0.0.1:8000/api/user/${props.username}`, {
          headers: {
            Authorization: `Token ${props.token}`
          }
        })
        .then(res => {
          setSubscribedLocations(res.data.places);
        })
        .catch(error => console.log(error));
    } else {
      setSubscribedLocations([]);
    }
  }, [props.token]);

  return (
    <div className="locations-cards">
      <LocationsCardsList
        setSubscribedLocations={setSubscribedLocations}
        locations={props.locations}
        renderLocationCard={renderLocationCard}
        subscribedLocations={subscribedLocations ? subscribedLocations : []}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  locations: state.locations.locations,
  token: state.auth.token,
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  onFetchLocations: () => dispatch(fetchLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsCardsManager);
