import React, { useState, useRef, useEffect } from "react";
import { useScript } from "../../hooks/useScript";
import { connect } from "react-redux";
import Collapsible from "../../hoc/Collapsible";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { addLocation } from "../../store/actions/locationActions";
import MyModal from "../Modal/Modal";
import Button from "../Button/Button";

function AddNewLocationForm({ onAddLocation, token }) {
  const [address, setAddress] = useState("");
  const [latLng, setLatLng] = useState("");
  const nameInput = useRef(null);
  const [loaded, error] = useScript(
    process.env.REACT_APP_GOOGLE_API_KEY
  );
  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalStyle, setmodalStyle] = useState(null);

  useEffect(() => {
    if (!loaded) return;
  }, [loaded, error]);

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
    if (loaded) {
      setisModalOpen(true);
      setmodalStyle("Added");
    }
  };

  return (
    <section className="add-new-location-wrapper">
      {loaded && !error ? (
        <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="input-wrapper">
              <form onSubmit={handleSubmit} className="add-new-site-form">
                <div className="add-new-site-form__input-wrapper add-new-site-form__input-wrapper--search">
                  <input
                    {...getInputProps({
                      placeholder: "Wyszukaj lokalizację...",
                      title: "Po adresie lub nazwie lokalizacji",
                      className: "add-new-site-form__input add-new-site-form__input--search"
                    })}
                  />
                </div>
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
                <div className="add-new-site-form__input-wrapper add-new-site-form__input-wrapper--name">
                  <input
                    type="text"
                    className="add-new-site-form__input add-new-site-form__input--name"
                    placeholder="Podaj nazwę dla użytkownika"
                    ref={nameInput}
                    required
                  />
                </div>
                <Button 
                  variant="add"
                  label="Dodaj lokalizację"
                  />
              </form>
            </div>
          )}
        </PlacesAutocomplete>
      ) : (
        <b>Something went wrong!</b>
      )}
      {isModalOpen && (
        <MyModal
          isModalOpen={isModalOpen}
          modalStyle={modalStyle}
          locationName={nameInput.current.value}
          setisModalOpen={setisModalOpen}
          token={token}
          setmodalStyle={setmodalStyle}
        ></MyModal>
      )}
    </section>
  );
}

const mapStateToProps = state => ({
  locations: state.locations.locations,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  onAddLocation: (name, address, lat, lng, token) => dispatch(addLocation(name, address, lat, lng, token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Collapsible(AddNewLocationForm));
