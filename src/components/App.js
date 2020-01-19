import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import AddNewLocationForm from "./AddNewLocationForm/AddNewLocationForm";
import Header from "./Header/Header";

const MyMap = lazy(() => import("./Map/Map"));
const LocationsCardsManager = lazy(() => import("./LocationsCardsManager/LocationsCardsManager"));

function App(props) {
  return (
    <div className="main">
      <Header />
      <div className="App App--js">
        <Suspense fallback={<div className="loader">Wczytywanie...</div>}>
          <MyMap />
          <LocationsCardsManager />
        </Suspense>
        {props.user === "admin" && <AddNewLocationForm />}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.username
});

export default connect(mapStateToProps)(App);
