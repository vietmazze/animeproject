import React, { Fragment, useState, useEffect } from "react";
import Tab from "./Tab";
import Table from "./Table";
import Card from "./Card";
import Sidebar from "./Sidebar";

const Tabs = ({ tab, anime }) => {
  const [activeTab, setActive] = useState("Popular");

  const onClickTabItem = tab => {
    setActive(tab);
  };

  //   useEffect(() => {
  //     onClickTabItem(tab);
  //     // eslint-disable-next-line
  //   }, []);

  const className = "tab-list-item";

  return (
    <div className="tabs px-4 py-4 mt-16 h-full border border-gray-500 ">
      <div className=" flex flex-col border-b ">
        <ul className="flex ">
          <h2 className="pr-8 py-2 font-semibold ">RECENTLY UPDATED</h2>
          {tab.map(child => (
            <Tab
              onClick={onClickTabItem}
              activeTab={activeTab}
              label={child.label}
              key={child.label}
            />
          ))}
        </ul>

        <Card tab={tab} anime={anime} activeTab={activeTab} />
        <Sidebar tab={tab} anime={anime} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Tabs;
