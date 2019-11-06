import React from "react";
import Leftside from "./leftside/leftside";
import Sidebar from "./sidebar/sidebar";

const Main = () => {
  return (
    <div className="container mx-auto mt-1">
      <div className="flex  ">
        <div className="w-full lg:w-9/12 ">
          <Leftside />
        </div>
        <div className="w-full md:w-3/12 lg:w-3/12 pl-2 border border-gray-500">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Main;
