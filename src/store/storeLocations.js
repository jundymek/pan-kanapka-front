import {
  FETCH_LOCATIONS_BEGIN,
  FETCH_LOCATIONS_SUCCESS,
  FETCH_LOCATIONS_FAILURE,
  ADD_NEW_LOCATION,
  DELETE_LOCATION,
} from "./actions/locationActions";

const initialState = {
  locations: [],
  loading: false,
  error: null
};

export const storeLocations = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        locations: action.payload.locations
      };

    case FETCH_LOCATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        locations: []
      };

    case ADD_NEW_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.payload.location]
      };

    case DELETE_LOCATION:
      return {
        ...state,
        locations: [...state.locations.filter(item => item.id !== action.payload.locationId)]
      };

    default:
      return state;
  }
};
