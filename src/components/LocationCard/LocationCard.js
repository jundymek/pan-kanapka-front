import React from "react";
import "./LocationCard.scss";
import MapForCard from "./MapForCard";
import { connect } from "react-redux";
import { removeLocation } from "../../store/actions/locationActions";
import { subscribeLocation } from "../../helpers/subscribeLocation";


function LocationCard(props) {
  return (
    <section className="locationCard">
      <div className="locationCard__title-wrapper">
        <h3 className="locationCard__title">{props.card.name}</h3>
      </div>
      <MapForCard location={props.card} />
      { props.token && props.username !== 'admin' ? 
      <button className="locationCard__btn-submit" onClick={() => subscribeLocation(props.card.id, props.token)}>Subscribe
          <div className="locationCard__btn-submit-inner"></div>
      </button> : ''
      }
      
    </section>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token,
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  onRemoveLocation: locationId => dispatch(removeLocation(locationId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);
