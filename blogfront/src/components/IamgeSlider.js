import React, { useState } from "react";
import "./ImageSlider.css";
import crumbled_paper from "../images/paper.jpg";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].image})`,
    height: " 100%",
    width: "100%",
    objectFit: "fill",
    backgroundPosition: "center",
  };

  return (
    <div className="slider">
      <div className="arrowLeft" onClick={goToPrevious}>
        <i class="fa-solid fa-angles-left fa-5x"></i>
      </div>
      <div className="arrowRight" onClick={goToNext}>
        <i class="fa-solid fa-angles-right fa-5x"></i>
      </div>
      <div className="slide" style={slideStyle}></div>
      <div className="paper-container">
        <img className="paper" src={crumbled_paper} alt="paper" />
        <div className="quote-text">{slides[currentIndex].quote}</div>
      </div>
    </div>
  );
};

export default ImageSlider;
