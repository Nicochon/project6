import React, { useState } from "react";
import ArrowBack from "../../../assets/arrow_back.png";
import ArrowNext from "../../../assets/arrow_forward.png";
import "../../../scss/Section/description/infos_appartement.scss";

const BannerDescription = ({ PicturesLogement }) => {
  const [current, setCurrent] = useState(0);
  const length = PicturesLogement.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(PicturesLogement) || PicturesLogement.length <= 0) {
    return null;
  }

  return (
    <div className="container_slider">
      <div className="slider">
        <button
          className={length === 1 ? "slide-none" : "left_arrow"}
          onClick={prevSlide}
        >
          <img src={ArrowBack} alt="fleche gauche" />
        </button>
        <button
          className={length === 1 ? "slide-none" : "right_arrow"}
          onClick={nextSlide}
        >
          <img src={ArrowNext} alt="fleche droite" />
        </button>
        {PicturesLogement.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={`${slide}-${index}`}
            >
              {index === current && (
                <img src={slide} alt="appartements à louer" className="image" />
              )}
            </div>
          );
        })}
      </div>
      <p className={length === 1 ? "slide-none" : null}>
        {current + 1}/{length}
      </p>
    </div>
  );
};

export default BannerDescription;
