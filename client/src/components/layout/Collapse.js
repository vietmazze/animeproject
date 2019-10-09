import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import useCollapse from "react-collapsed";

const Collapse = ({ task: { state } }) => {
  const { getCollapseProps, getToggleProps, isOpen } = useCollapse();

  return (
    <div
      className={
        "block " + (state == "invisible" ? "visible md:invisible" : "visible")
      }
    >
      <button {...getToggleProps()} className="flex items-center">
        {isOpen ? (
          <FontAwesomeIcon icon={faBars} size="2x" className="fontawesome" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" className="fontawesome" />
        )}
      </button>
      <section {...getCollapseProps()}>
        <ul className=" py-3 text-white">
          <li>
            <a href="/home">Shows</a>
          </li>
          <li>
            <a href="/home">News</a>
          </li>
          <li>
            <a href="/home">Manga</a>
          </li>
          <li>
            <a href="/home">Forums</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Collapse;
