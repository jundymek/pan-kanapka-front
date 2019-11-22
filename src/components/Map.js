import React, {useState} from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


function MyMap() {
    const [currentPos, setCurrentPos] = useState([52.237049, 21.017532])

    const handleClick = (e) => {
        setCurrentPos(e.latlng)
        console.log(currentPos)
      }

      return (
        <Map center={currentPos} zoom={13} onClick={handleClick}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={currentPos} draggable={true}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      )
    }


// class MyMap extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//           lat: 51.505,
//           lng: -0.09,
//           zoom: 13,
//           currentPos: null
//         };
//       }

//       handleClick = (e) => {

//         this.setState({ currentPos: e.latlng });
//         console.log(e.latlng)
//         console.log(this.state.currentPos)
//       }
    
//       render() {
//         const position = [this.state.lat, this.state.lng];
//         return (
//             <Map center={position} zoom={this.state.zoom} onClick={this.handleClick}>
//               <TileLayer
//                 attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//               />
//               <Marker position={position} draggable={true}>
//                 <Popup>
//                   A pretty CSS3 popup. <br /> Easily customizable.
//                 </Popup>
//               </Marker>
//             </Map>
//           )
//         }
//     }

export default MyMap;
