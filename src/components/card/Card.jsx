import React from 'react';
import { Link } from "react-router-dom";
import './card.scss'


const Card = ({item}) => {
  const {id , img , address , price , bedroom , title  , bathroom} = item
  return (
    <div className="card">
      <Link to={`/${id}`} className="imageContainer">
        <img src={img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${id}`}>{title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{address}</span>
        </p>
        <p className="price">$ {price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card