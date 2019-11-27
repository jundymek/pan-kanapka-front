import axios from "axios";

export const FETCH_LOCATIONS_BEGIN = "FETCH_LOCATIONS_BEGIN";
export const FETCH_LOCATIONS_SUCCESS = "FETCH_LOCATIONS_SUCCESS";
export const FETCH_LOCATIONS_FAILURE = "FETCH_LOCATIONS_FAILURE";
export const ADD_NEW_LOCATION = "ADD_NEW_LOCATION"

export function fetchLocations() {
  return dispatch => {
    dispatch(fetchLocationsBegin());
    return axios
      .get("http://127.0.0.1:8000/api/places/")
      .then(handleErrors)
      .then(res => {
        console.log(res);
        dispatch(fetchLocationsSuccess(res.data));
        return res;
      })
      .catch(error => dispatch(fetchLocationsFailure(error)));
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
})
