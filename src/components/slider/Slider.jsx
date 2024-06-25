import React, { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const handleImage = () => {
    setImageIndex(0)
  }

  const handleImageClose = () =>{
    setImageIndex(null)
  }

  const handleSilder = (index) => {
    setImageIndex(index + 1)
  }

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };


  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img src="/arrow.png" alt="" onClick={() => changeSlide("left")}/>
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow">
            <img src="/arrow.png" className="right" alt="" onClick={() => changeSlide("right")}/>
          </div>
          <div className="close" onClick={handleImageClose}>X</div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={handleImage} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img src={image} alt="" key={index} onClick={() => handleSilder(index)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
