import axios from "axios";

export const FETCH_LOCATIONS_BEGIN = "FETCH_LOCATIONS_BEGIN";
export const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS";
export const FETCH_LOCATIONS_FAILURE = "FETCH_LOCATIONS_FAILURE";
export const ADD_NEW_LOCATION = "ADD_NEW_LOCATION";
export const DELETE_LOCATION = "DELETE_LOCATION";

export function fetchLocations() {
  return dispatch => {
    dispatch(fetchLocationsBegin());
    return axios
      .get("http://127.0.0.1:8000/api/places/")
      .then(handleErrors)
      .then(res => {
        dispatch(fetchLocationsSuccess(res.data));
      })
      .catch(error => dispatch(fetchLocationsFailure(error)));
  };
}

export function removeLocation(id, token) {
  console.log("reeeeeeeeeee", id, token);
  return dispatch => {
    return axios
      .delete(`http://127.0.0.1:8000/api/places/${id}`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(() => {
        dispatch(deleteLocation(id));
      });
  };
}

export function addLocation(name, address, lat, lng, token) {
  return dispatch => {
    axios
      .post(
        "http://127.0.0.1:8000/api/places/",
        {
          name: name,
          address: address,
          latitude: lat,
          longitude: lng
        },
        {
          headers: {
            Authorization: `Token ${token}`
          }
        }
      )
      .then(function(response) {
        console.log(response);
        dispatch(addNewLocation(response.data));
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (response.error) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchLocationsBegin = () => ({
  type: FETCH_LOCATIONS_BEGIN
});

export const fetchLocationsSuccess = locations => ({
  type: FETCH_LOCATIONS_SUCCESS,
  payload: { locations }
});

export const fetchLocationsFailure = error => ({
  type: FETCH_LOCATIONS_FAILURE,
  payload: { error }
});

export const addNewLocation = location => ({
  type: ADD_NEW_LOCATION,
  payload: { location }
});

export const deleteLocation = locationId => ({
  type: DELETE_LOCATION,
  payload: { locationId }
});
