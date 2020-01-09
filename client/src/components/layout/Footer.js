import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className='pt-5 mt-2 border-t-8 border-gray-600'>
      <div className='md:flex flex-row'>
        <ul className='hidden md:block w-1/5'>
          <li>HELP</li>
          <li>
            {" "}
            <Link to='/'>Contact</Link>{" "}
          </li>

          <li>
            {" "}
            <Link to='/'>FAQ</Link>
          </li>
          <li>
            {" "}
            <Link to='/'>Request</Link>
          </li>
        </ul>
        <ul className=' hidden md:block w-1/5'>
          <li>HELP</li>
          <li>
            {" "}
            <Link to='/'>Newest</Link>{" "}
          </li>

          <li>
            {" "}
            <Link to='/'>Recently Updated</Link>
          </li>
          <li>
            {" "}
            <Link to='/'>Ongoing</Link>
          </li>
        </ul>
        <div className='md:w-2/5'>
          <ul>
            <li className='text-3xl text-center'>ANIME WEBSITE</li>
            <li className='flex flex-row  justify-center '>
              <button className='fa-layers fa-fw rounded-sm bg-red-500 items-center mr-3'>
                <FontAwesomeIcon icon={faGoogle} size='1x' color='black' />
              </button>
              <button className='fa-layers fa-fw rounded-sm bg-blue-500 mr-3 '>
                <FontAwesomeIcon icon={faFacebookF} size='1x' color='black' />
              </button>
              <button className='fa-layers fa-fw rounded-sm bg-blue-500  '>
                <FontAwesomeIcon icon={faTwitter} size='1x' color='black' />
              </button>
            </li>
            <li className='text-sm  text-center pt-2'>
              {" "}
              Copyright @anime.com. All Rights Reserved
            </li>
            <div className='text-xs text-center pt-2 '>
              Disclaimer: This site does not store any files on its server. All
              Contents are providided by non affliated third parties
            </div>
          </ul>
        </div>
        <div className='w-1/5'></div>
      </div>
    </div>
  );
};

export default Footer;
