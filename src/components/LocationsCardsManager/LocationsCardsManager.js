import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationCard from "../LocationCard/LocationCard";
import { LocationsCardsList } from "../LocationsCardsList/LocationsCardsList";
import { connect } from "react-redux";
import "./LocationsCardsManager.scss";
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
  const [isLoading, setIsLoading] = useState(false);
  const [subscribedLocations, setSubscribedLocations] = useState([]);
  const [numberSubscriptions, setnumberSubscriptions] = useState({});

  console.log(numberSubscriptions);

  useEffect(() => {
    getSubscriptionData();
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
  }, [props.token, props.username]);

  function getSubscriptionData() {
    setIsLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/get_number_of_subscriptions/`)
      .then(res => {
        console.log(res);
        setnumberSubscriptions(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }

  console.log(props.subscriptions);
  return !isLoading ? (
    <div className="locations-cards">
      <LocationsCardsList
        setSubscribedLocations={setSubscribedLocations}
        locations={props.locations}
        renderLocationCard={renderLocationCard}
        subscribedLocations={subscribedLocations ? subscribedLocations : []}
        numberSubscriptions={numberSubscriptions}
      />
    </div>
  ) : (
    <div>LOADING</div>
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
