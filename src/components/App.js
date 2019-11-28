import React from 'react';
import './App.scss';
import MyMap from './Map/Map'
import AddNewLocationForm from "./AddNewLocationForm/AddNewLocationForm";
import LocationsTable from "./LocationsTable/LocationsTable";

function App() {
  return (
    <div className="App">
      <MyMap />
      <AddNewLocationForm />
      <LocationsTable />
    </div>
  );
}

export default App;
