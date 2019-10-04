import React, { Fragment } from "react";
import Navbar from "./components/layout/navbar";
import Leftside from "./components/anime/leftside/main";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Leftside />
      </div>
    </Fragment>
  );
};

export default App;
