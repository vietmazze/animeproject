import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hxh from "../../img/hunterxhunter.png";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="flex ">
      <div className="lg:w-8/12  ">
        <div className="container mx-auto  ">
          <Slider {...settings} className=" text-white h-350  ">
            <div className=" carousel-1  bg-cover bg-no-repeat h-full w-auto">
              <div className=" absolute bottom-0 bg-gray-700 opacity-50 py-4 mb-1 h-24 w-full">
                <h3>Hunter X Hunter</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
              </div>
            </div>
            <div className="carousel-2 bg-cover bg-no-repeat h-350"></div>
            <div className="carousel-3 bg-cover bg-no-repeat h-350"></div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
