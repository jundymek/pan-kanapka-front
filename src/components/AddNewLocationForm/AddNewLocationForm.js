import React, { useState, useRef } from "react";
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import "./AddNewLocationForm.scss";
import {addLocation} from '../../store/actions/locationActions'

function AddNewLocationForm({ onAddLocation, token }) {
  const [address, setAddress] = useState("");
  const [latLng, setLatLng] = useState("");
  const nameInput = useRef(null);

  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => setLatLng(latLng))
      .then(setAddress(address))
      .catch(error => console.error("Error", error));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddLocation(nameInput.current.value, address, latLng.lat, latLng.lng, token)
  };

  return (
    <div>
      <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="input-wrapper">
            <form onSubmit={handleSubmit}>
              <input
                className="input"
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input"
                })}
              />
              <input type="text" placeholder="Location name" ref={nameInput} required />
              <button type="submit">Submit</button>
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className
                        /* style, */
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </form>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}


const mapStateToProps = state => ({
  locations: state.locations.locations,
  token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
  onAddLocation: (name, address, lat, lng, token) => dispatch(addLocation(name, address, lat, lng, token))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewLocationForm);

