import React from "react";
import spinner from "../layout/spinner.gif";
function Spinner() {
  return (
    <div>
      <img className='display:block m-auto w-12' src={spinner}></img>
    </div>
  );
}

export default Spinner;
