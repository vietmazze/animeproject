import React from "react";
import Topanime from "./topAnime";
import MainAnime from "./mainAnime";
import Tabs from "../../layout/Tabs";

const sideBar = () => {
  return (
    <div className="">
      <MainAnime />
      <Topanime />
    </div>
  );
};

export default sideBar;
