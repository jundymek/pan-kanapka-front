import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
// import MyMap from "./Map/Map";
import AddNewLocationForm from "./AddNewLocationForm/AddNewLocationForm";
import SignUpWindow from "./SignUpWindow/SignUpWindow";
// import LocationsCardsManager from "./LocationsCardsManager/LocationsCardsManager";
import Header from "./Header/Header";

const MyMap = lazy(() => import("./Map/Map"));
const LocationsCardsManager = lazy(() => import("./LocationsCardsManager/LocationsCardsManager"));

function App(props) {
  return (
    <div className="main">
      <Header />
      <div className="App App--js">
        <Suspense fallback={<div>Wczytywanie...</div>}>
          <MyMap />
          <LocationsCardsManager />
        </Suspense>
        {props.user === "admin" ? <AddNewLocationForm /> : ""}
      </div>
      <SignUpWindow />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.username
});

export default connect(mapStateToProps)(App);
