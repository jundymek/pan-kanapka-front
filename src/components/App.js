import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import MyMap from './Map/Map'
import AddNewLocationForm from "./AddNewLocationForm/AddNewLocationForm";
import LocationsTable from "./LocationsTable/LocationsTable";
import LoginLogout from "./LoginLogout/LoginLogout";
import LoginWindow from "./LoginWindow/LoginWindow"

function App({auth}) {
  console.log(auth)
  return (
    <div>
      <div className="App">
        <LoginLogout />
        <MyMap />
        <AddNewLocationForm />
        <LocationsTable />
      </div>
      <LoginWindow />
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.token
})

export default connect(
  mapStateToProps,
)(App);
