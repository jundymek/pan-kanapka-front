import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LocationsTable.scss";

function LocationsTable() {
  const [locations, setLocations] = useState([]);

  function getLocations() {
    axios.get(`http://127.0.0.1:8000/api/places/`).then(res => {
      const locations = res.data;
      console.log(locations);
      setLocations(locations);
    });
  }

  function deleteLocation(id) {
    console.log(id);
    axios.delete(`http://127.0.0.1:8000/api/places/${id}`).then(res => {
      console.log(res);
      setLocations(locations.filter((item) => item.id !== id))
    });
  }

  useEffect(() => {
    getLocations();
  }, []);

  console.log(locations);
  const tableBody = locations.length
    ? locations.map((location, index) => {
        return (
          <tr key={index} className="table__body-tr">
            <td className="table__body-td">{location.name}</td>
            <td className="table__body-td">{location.address}</td>
            <td className="table__body-td">
              <button onClick={() => deleteLocation(location.id)}>Delete</button>
            </td>
            <td className="table__body-td">
              <a href="{% url 'subscribe' place.id %}">Subscribe</a>
            </td>
          </tr>
        );
      })
    : null;
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__head-tr">
          <th className="table__head-th">name</th>
          <th className="table__head-th">address</th>
        </tr>
      </thead>
      <tbody className="table__body">{tableBody}</tbody>
    </table>
  );
}

export default LocationsTable;
