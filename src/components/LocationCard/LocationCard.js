import React from "react";
import "./LocationCard.scss";
import MapForCard from "./MapForCard";
import { connect } from "react-redux";
import { removeLocation } from "../../store/actions/locationActions";
import { subscribeLocation } from "../../helpers/subscribeLocation";


function CardButtons({username, cardId, token, deleteLocation}) {
  console.log(cardId, token)
  if (username !== 'admin') {
    return (
      <button className="locationCard__btn-submit" onClick={() => subscribeLocation(cardId, token)}>Subscribe
          <div className="locationCard__btn-submit-inner"></div>
      </button>
    )
  } else {
    return (
      <button className="locationCard__btn-submit" onClick={() => deleteLocation(cardId, token)}>Delete
          <div className="locationCard__btn-submit-inner"></div>
      </button>
    )
  }
}

function LocationCard(props) {
  return (
    <section className="locationCard">
      <div className="locationCard__title-wrapper">
        <h3 className="locationCard__title">{props.card.name}</h3>
      </div>
      <MapForCard location={props.card} />
      { props.token ? 
      <CardButtons 
        cardId={props.card.id} 
        deleteLocation={props.onRemoveLocation}
        username={props.username}
        token={props.token}
        /> : ''
      }
      
    </section>
  );
}

const mapStateToProps = state => ({
  token: state.auth.token,
  username: state.auth.username
});

const mapDispatchToProps = dispatch => ({
  onRemoveLocation: (locationId, token) => dispatch(removeLocation(locationId, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationCard);
