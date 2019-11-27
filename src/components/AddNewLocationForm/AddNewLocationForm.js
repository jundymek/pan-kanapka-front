import React, { useState, useRef } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import "./AddNewLocationForm.scss";
import {addNewLocation} from '../../store/actions/locationActions'

function AddNewLocationForm({ newMarker, setMarkerAddress, setLocationName, onAddLocation }) {
  const [address, setAddress] = useState("");
  const [latLng, setLatLng] = useState("");
  const nameInput = useRef(null);

  const handleChange = address => {
    setAddress(address);
  };
  console.log(onAddLocation)

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => setLatLng(latLng))
      .then(setAddress(address))
      .catch(error => console.error("Error", error));
  };

  const handleAddNewLocation = () => {
    axios.post('http://127.0.0.1:8000/api/places/', {
      name: nameInput.current.value,
      address: address,
      latitude: latLng.lat,
      longitude: latLng.lng
    })
    .then(function (response) {
      onAddLocation(response.data)
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    newMarker(latLng);
    setMarkerAddress(address);
    setLocationName(nameInput.current.value);
    handleAddNewLocation()
    console.log({latLng})
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
})

const mapDispatchToProps = dispatch => ({
  onAddLocation: (location) => dispatch(addNewLocation(location))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewLocationForm);

