import React from 'react';
import { MapContainer, Marker, Popup,  TileLayer, } from 'react-leaflet';
import './map.scss'
import 'leaflet/dist/leaflet.css'
import Pin from '../pin/Pin';


const Map = ({items}) => {
  return (
    <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <Marker position={[52.4797, -1.90269]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker> */}
    {
        items.map(item => (
            <Pin key={item.id} item={item}/>
        ))
    }
  </MapContainer>
  )
}

export default Map