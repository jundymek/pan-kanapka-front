import React, { useState, useRef } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import "./AddNewLocationForm.scss";

function AddNewLocationForm({ newMarker, setMarkerAddress, setLocationName }) {
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
    newMarker(latLng);
    setMarkerAddress(address);
    setLocationName(nameInput.current.value);
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
                  // inline style for demonstration purpose
                  /* const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#000', cursor: 'pointer' }; */
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

export default AddNewLocationForm;
