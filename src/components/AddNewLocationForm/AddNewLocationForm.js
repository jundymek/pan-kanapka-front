import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { addLocation } from "../../store/actions/locationActions";

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
    onAddLocation(nameInput.current.value, address, latLng.lat, latLng.lng, token);
  };

  return (
    <div className="add-new-location-wrapper">
      <div className="wrap-collabsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label htmlFor="collapsible" className="lbl-toggle">
          Dodaj nową lokalizację
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="input-wrapper">
                  <form onSubmit={handleSubmit} className="add-new-site-form">
                    <input
                      {...getInputProps({
                        placeholder: "Wyszukaj lokalizację...",
                        title: "Po adresie lub nazwie lokalizacji",
                        className: "add-new-site-form__input"
                      })}
                    />
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
                            <span>{suggestion.description}ddd</span>
                          </div>
                        );
                      })}
                    </div>
                    <input
                      type="text"
                      className="add-new-site-form__input"
                      placeholder="Podaj nazwę dla użytkownika"
                      ref={nameInput}
                      required
                    />
                    <button type="submit" className="add-new-site-form__button">
                      Dodaj lokalizację
                    </button>
                  </form>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  locations: state.locations.locations,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  onAddLocation: (name, address, lat, lng, token) => dispatch(addLocation(name, address, lat, lng, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewLocationForm);
