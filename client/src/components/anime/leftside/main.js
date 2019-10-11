import React from "react";
import Headline from "./headline";
import Recently from "./recentlyupdated";

const Leftside = () => {
  return (
    <div className="flex ">
      <div className="lg:w-8/12  ">
        <Headline />
      </div>
    </div>
  );
};

export default Leftside;
