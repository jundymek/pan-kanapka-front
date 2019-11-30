import { combineReducers } from "redux";
import { storeLocations } from "./storeLocations";
import { storeAuth } from "./storeAuth";

const reducer = combineReducers({
  locations: storeLocations,
  auth: storeAuth
});

export default reducer;
