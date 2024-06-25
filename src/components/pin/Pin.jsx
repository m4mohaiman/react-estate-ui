import React from 'react';
import './pin.scss';
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";



const Pin = ({item}) => {
  const { latitude , longitude , id , title , bedroom , price} = item;
  return (
    <Marker position={[latitude, longitude]}>
    <Popup>
      <div className="popupContainer">
        <img src={item.img} alt="" />
        <div className="textContainer">
          <Link to={`/${id}`}>{title}</Link>
          <span>{bedroom} bedroom</span>
          <b>$ {price}</b>
        </div>
      </div>
    </Popup>
  </Marker>
  )
}

export default Pin