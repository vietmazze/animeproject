import React from "react";
import Headline from "./headline";
import Recently from "./recentlyupdated";

const Leftside = () => {
  return (
    <div className="container mx-auto mt-1">
      <div className="flex  ">
        <div className="w-full lg:w-9/12 ">
          <Headline />

          <Recently />
        </div>
      </div>
    </div>
  );
};

export default Leftside;
