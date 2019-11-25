export const FETCH_LOCATIONS_BEGIN   = 'FETCH_LOCATIONS_BEGIN';
export const FETCH_LOCATIONS_SUCCESS = 'FETCH_LOCATIONS_SUCCESS';
export const FETCH_LOCATIONS_FAILURE = 'FETCH_LOCATIONS_FAILURE';

export function fetchLocations() {
    return dispatch => {
      dispatch(fetchLocationsBegin());
      return fetch("http://127.0.0.1:8000/api/places/")
        .then(handleErrors)
        .then(res => res.json())
        .then(res => {
          dispatch(fetchLocationsSuccess(res));
          return res;
        })
        .catch(error => dispatch(fetchLocationsFailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
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
