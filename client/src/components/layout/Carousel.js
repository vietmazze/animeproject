import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Carousel = ({ anime }) => {
  return (
    <div className='container mx-auto  mt-2'>
      <div className='flex flex-wrap'>
        <div className='w-8/12 '>
          {anime.length === 0 ? (
            <p>Test failed</p>
          ) : (
            <AwesomeSlider bullets={true}>
              {anime.slice(0, 3).map(item => (
                <div data-src={item.image}>
                  {" "}
                  <div className=' absolute bottom-0 left-0 bg-gray-700 opacity-50 py-4 mb-auto h-24 w-full text-white'>
                    <h3>Title:{item.title}</h3>
                    <h4>Score: {item.score}</h4>
                    <h4>Rank: {item.rank}</h4>
                  </div>
                </div>
              ))}
            </AwesomeSlider>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
