import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Collapse from "./Collapse";
import Login from "./Login";
import { connect } from "react-redux";
import { setLoginEnable } from "../../actions/animeAction";

const Navbar = ({ anime: { animes, login }, setLoginEnable }) => {
  const loginClick = () => {
    setLoginEnable(!login);
  };

  useEffect(() => {
    console.log(login);
    // eslint-disable-next-line
  }, []);

  return (
    <nav className=' bg-black justify-between  flex-wrap py-3  '>
      <div className='container mx-auto '>
        <div className='relative flex object-center '>
          <Collapse task={{ state: "invisible" }} />

          <ul className='relative flex object-center text-lg invisible md:visible '>
            <li className=' text-white'>
              <Link className=' text-blue-500 active:text-blue-500' to='/'>
                Home
              </Link>
            </li>
            <li className='pl-4 text-white hover:text-gray-500'>
              <Link to='/watch'>Watch</Link>
            </li>
            <li className='pl-4 text-white hover:text-gray-500'>
              <Link to='/contact'>Contact</Link>
            </li>
            <li className='pl-4 text-white hover:text-gray-500'>
              <Link to='/about'>About</Link>
            </li>
          </ul>

          <ul className=' text-lg ml-auto '>
            <li className='px-4 text-white'>
              <button onClick={loginClick} className=''>
                <FontAwesomeIcon icon={faUser} />
                <h3 className=' pl-2 hidden md:inline hover:text-gray-500'>
                  Login
                </h3>
              </button>
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

const mapStateToProps = state => ({
  anime: state.anime
});

export default connect(mapStateToProps, { setLoginEnable })(Navbar);
