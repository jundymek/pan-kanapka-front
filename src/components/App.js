import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import MyMap from './Map/Map'
import AddNewLocationForm from "./AddNewLocationForm/AddNewLocationForm";
import LocationsTable from "./LocationsTable/LocationsTable";
import LoginLogout from "./LoginLogout/LoginLogout"

function App({auth}) {
  console.log(auth)
  return (
    <div className="App">
      <MyMap />
      <AddNewLocationForm />
      <LocationsTable />
      <LoginLogout />
    </div>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.token
})

export default connect(
  mapStateToProps,
)(App);
