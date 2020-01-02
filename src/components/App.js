import React from "react";
import { connect } from "react-redux";
import MyMap from "./Map/Map";
import AddNewLocationForm from "./AddNewLocationForm/AddNewLocationForm";
import SignUpWindow from "./SignUpWindow/SignUpWindow";
import LocationsCardsManager from "./LocationsCardsManager/LocationsCardsManager";
import Header from "./Header/Header";

function App(props) {
  return (
    <div>
      <Header />
      <div className="App App--js">
        <MyMap />
        {props.user === "admin" ? <AddNewLocationForm /> : ""}
        <LocationsCardsManager />
      </div>
      <SignUpWindow />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.username
});

export default connect(mapStateToProps)(App);
