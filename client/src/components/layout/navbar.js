import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Collapse from "./Collapse";
import useCollapse from "react-collapsed";

const Navbar = () => {
  return (
    <nav className=" bg-black justify-between  flex-wrap p-3  ">
      <div className="container mx-auto">
        <div className="relative flex object-center ml-10 ">
          <Collapse task={{ state: "invisible" }} />

          <ul className="relative flex object-center text-lg invisible md:visible ">
            <li className="px-4  text-white">
              <a className=" text-blue-500 active:text-blue-500" href="#">
                Home
              </a>
            </li>
            <li className="px-4 text-white hover:text-gray-500">
              <a href="/title">News</a>
            </li>
            <li className="px-4 text-white hover:text-gray-500">
              <a href="/contact">Contact</a>
            </li>
            <li className="px-4 text-white hover:text-gray-500">
              <a href="/about">About</a>
            </li>
          </ul>

          <ul className=" text-lg ml-auto mr-3">
            <li className="px-4 text-white">
              <a href="/login" className="">
                <FontAwesomeIcon icon={faUser} />
                <h3 className=" pl-2 inline invisible lg:visible hover:text-gray-500">
                  Login
                </h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  })
};
export default Navbar;
