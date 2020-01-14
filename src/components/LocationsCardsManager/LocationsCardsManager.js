import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationCard from "../LocationCard/LocationCard";
import { LocationsCardsList } from "../LocationsCardsList/LocationsCardsList";
import { connect } from "react-redux";
import { fetchLocations } from "../../store/actions/locationActions";
import runServiceWorker from "../../helpers/runServiceWorker";

const renderLocationCard = (card, index, isSubscribed, setSubscribedLocations, numberSubscriptions) => {
  return (
    <LocationCard
      setSubscribedLocations={setSubscribedLocations}
      key={index}
      card={card}
      isSubscribed={isSubscribed}
      numberSubscriptions={numberSubscriptions}
    />
  );
};

function LocationsCardsManager(props) {
  const { onFetchLocations } = props;
  const [subscribedLocations, setSubscribedLocations] = useState([]);
  const [numberSubscriptions, setnumberSubscriptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await getNumberOfSubscriptionsForLocations();
      await onFetchLocations();
    };
    fetchData();
  }, [onFetchLocations]);

  useEffect(() => {
    if (props.token) {
      runServiceWorker(props.token, props.username);
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/user/${props.username}`, {
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
  }, [props.token, props.username]);

  function getNumberOfSubscriptionsForLocations() {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/get_number_of_subscriptions/`)
      .then(res => {
        setnumberSubscriptions(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className="locations-cards" id="locations-cards">
      <LocationsCardsList
        setSubscribedLocations={setSubscribedLocations}
        locations={props.locations}
        renderLocationCard={renderLocationCard}
        subscribedLocations={subscribedLocations ? subscribedLocations : []}
        numberSubscriptions={numberSubscriptions}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  locations: state.locations.locations,
  token: state.auth.token,
  username: state.auth.username,
  loading1: state.locations.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchLocations: () => dispatch(fetchLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsCardsManager);
