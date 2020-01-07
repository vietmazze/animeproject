import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Login from "./components/layout/Login";
import Main from "./components/watch/main";
import { Provider } from "react-redux";
import store from "./store";
const secondApp = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Login></Login>

        <Navbar />
        <div className=''>
          <Main />
        </div>
      </Fragment>
    </Provider>
  );
};

export default secondApp;
