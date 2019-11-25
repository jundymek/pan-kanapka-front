import { combineReducers } from "redux";
import { storeLocations } from "./storeLocations";

const reducer = combineReducers({
  locations: storeLocations
});

export default reducer;
