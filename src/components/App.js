import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import MyMap from './Map/Map'
import AddNewLocationForm from "./AddNewLocationForm/AddNewLocationForm";
import LocationsTable from "./LocationsTable/LocationsTable";
import LoginLogout from "./LoginLogout/LoginLogout";
import LoginWindow from "./LoginWindow/LoginWindow"
import LocationsCardsManager from './LocationsCardsManager/LocationsCardsManager';
import Header from './Header/Header';

function App(props) {
  return (
    <div>
      <Header />
      <div className="App">
        <LoginLogout />
        <MyMap />
        {props.user === 'admin' ? <AddNewLocationForm /> : ''}
        <LocationsCardsManager />
      </div>
      <LoginWindow />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.username
})

export default connect(
  mapStateToProps,
)(App);
