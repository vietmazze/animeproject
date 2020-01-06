import React from "react";
import spinner from "../layout/spinner.gif";
function Spinner() {
  return (
    <div>
      <img className='display:block m-auto w-48' src={spinner}></img>
    </div>
  );
}

export default Spinner;
