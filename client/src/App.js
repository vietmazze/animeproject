import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./components/anime/leftside/main";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <div className="">
          <Main />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
