import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setLoginEnable } from "../../actions/animeAction";
import { setRegisterEnable } from "../../actions/animeAction";
import { getLogin } from "../../actions/animeAction";
import { getRegister } from "../../actions/animeAction";
import { setAlert } from "../../actions/alertAction";
import { setLoading } from "../../actions/animeAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Alerts from "../layout/Alerts";
import Spinner from "./Spinner";

const Login = ({
  auth: { loginToken, isAuthenticated, loginFail, registerFail },
  anime: { loading, login, register },
  setLoginEnable,
  setRegisterEnable,
  getLogin,
  getRegister,
  setAlert,
  setLoading
}) => {
  const onClose = () => {
    loading = false;
    login = false;
    register = false;
    setLoginEnable(login);
    setRegisterEnable(register);
  };

  useEffect(() => {
    if (loginFail === "Invalid Credentials") {
      setAlert(loginFail, "red-500");
    }
    //eslint-disable-next-line
  }, [loginFail, isAuthenticated, loading]);

  const onLoginSubmit = e => {
    e.preventDefault();
    setLoading();

    if (e.target[0].value === "" || e.target[1].value === "") {
      setAlert("Please fill in all fields", "red-500");
    } else {
      const loginData = {
        email: e.target[0].value,
        password: e.target[1].value
      };

      getLogin(loginData);
      onClose();
    }
  };

  const onRegisterSubmit = e => {
    e.preventDefault();
    // make sure you compare password later
    if (e.target[0].value === "" || e.target[1].value === "") {
      setAlert("Please fill in all fields", "red-500");
    } else {
      const registerData = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
      };

      getRegister(registerData);

      onClose();
    }
  };

  const onSignUp = e => {
    e.preventDefault();
    setLoginEnable(!login);
    setRegisterEnable(!register);
  };

  let activelogin;
  let activeregister;

  const onLogin = e => {
    e.preventDefault();
    setRegisterEnable(!register);
    setLoginEnable(!login);
  };
  if (login === true) {
    activelogin = (
      <div
        id='modal-wrapper'
        className='login block w-full  fixed z-10 top-0 left-0  w-full h-full overflow-auto bg-black '
      >
        <div className='popup_inner'>
          <button
            className='fa-layers fa-fw absolute right-0'
            onClick={onClose}
          >
            <FontAwesomeIcon
              icon={faTimes}
              size='2x'
              color='red'
              transform='down-2'
            />
          </button>
          <form
            onSubmit={onLoginSubmit}
            action=''
            className='flex flex-col items-center content-center h-full text-center'
          >
            <h1 className='text-5xl text-red-500 font-bold'>Member Login</h1>
            {!loading ? <Alerts /> : <Spinner />}
            <input
              className='py-2 px-4 w-full bg-gray-300 border border-solid border-black'
              type='email'
              placeholder='Email'
              name='email'
            />
            <input
              className='py-2 px-4 mt-2 w-full bg-gray-300 border border-solid border-black '
              type='password'
              placeholder='Password'
              name='password'
            />

            <a className='text-red-500 py-3' href=''>
              {" "}
              Forgot your password?
            </a>
            <button
              type='submit'
              className=' mt-5 border border-solid border-red-500  bg-red-500 rounded py-2 px-4 '
            >
              Sign In
            </button>
            <h4 className='text-white'>Not a member yet?</h4>
            <button onClick={onSignUp} className='text-red-500' href=''>
              Signup
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    console.log("Login is not active");
  }

  if (register === true) {
    activeregister = (
      <div
        id='modal-wrapper'
        className='login block w-full  fixed z-10 top-0 left-0  w-full h-full overflow-auto bg-black '
      >
        <div className='popup_inner'>
          <button
            className='fa-layers fa-fw absolute right-0'
            onClick={onClose}
          >
            <FontAwesomeIcon
              icon={faTimes}
              size='2x'
              color='red'
              transform='down-2'
            />
          </button>
          <form
            onSubmit={onRegisterSubmit}
            action=''
            className='flex flex-col items-center content-center h-full text-center'
          >
            <h1 className='text-5xl text-red-500 font-bold'>Register</h1>
            <Alerts />
            <input
              className='py-2 px-4 w-full bg-gray-300 border border-solid border-black'
              type='text'
              placeholder='Username'
              name='username'
            />
            <input
              className='py-2 px-4 mt-2 w-full bg-gray-300 border border-solid border-black'
              type='email'
              placeholder='Email'
              name='email'
            />
            <input
              className='py-2 px-4 mt-2 w-full bg-gray-300 border border-solid border-black '
              type='password'
              placeholder='Password'
              name='password'
            />
            <input
              className='py-2 px-4 mt-2 w-full bg-gray-300 border border-solid border-black '
              type='password'
              placeholder='Password Confirmation'
              name='password2'
            />

            <button
              type='submit'
              className=' mt-5 border border-solid border-red-500  bg-red-500 rounded py-2 px-4 '
            >
              Register
            </button>

            <button onClick={onLogin} className='text-red-500' href=''>
              Back to Login
            </button>
          </form>
        </div>
      </div>
    );
    console.log("activeregister");
    console.log(loginToken);
  } else {
    console.log("Register no active");
  }

  return (
    <div>
      <Alerts /> {activelogin} {activeregister}
    </div>
  );
};

const mapStateToProps = state => ({
  anime: state.anime,
  auth: state.auth
});

export default connect(mapStateToProps, {
  setLoginEnable,
  setRegisterEnable,
  getLogin,
  getRegister,
  setAlert,
  setLoading
})(Login);
