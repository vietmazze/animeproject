import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import { Provider } from "react-redux";
import store from "./store";
import Headline from "./components/anime/leftside/headline";

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />

        <Headline />
      </Fragment>
    </Provider>
  );
};

export default App;
