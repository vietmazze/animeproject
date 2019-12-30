import React, { useState } from "react";
import { connect } from "react-redux";

const Login = ({ anime: { animes, loading, login } }) => {
  let activelogin;
  if (login === true) {
    activelogin = (
      <div
        id='modal-wrapper'
        className='login block w-full  fixed z-10 top-0 left-0  w-full h-full overflow-auto bg-black '
      >
        <div className='popup_inner'>
          <form
            action=''
            className='flex flex-col items-center content-center h-full text-center'
          >
            <h1 className='text-5xl text-red-500 font-bold'>Member Login</h1>

            <input
              className='py-2 px-4 w-full bg-gray-300 border border-solid border-black'
              type='email'
              placeholder='Email'
            />
            <input
              className='py-2 px-4 mt-2 w-full bg-gray-300 border border-solid border-black '
              type='password'
              placeholder='Password'
            />

            <a className='text-red-500 py-3' href=''>
              {" "}
              Forgot your password?
            </a>
            <button className=' mt-5 border border-solid border-red-500  bg-red-500 rounded py-2 px-4 '>
              Sign In
            </button>
            <h4 className='text-white'>Not a member yet?</h4>
            <a className='text-red-500' href=''>
              Signup
            </a>
          </form>
        </div>
      </div>
    );
    console.log("activcelogin");
  } else {
    console.log("not work");
  }

  return <div> {activelogin}</div>;
};

const mapStateToProps = state => ({
  anime: state.anime
});

export default connect(mapStateToProps)(Login);
