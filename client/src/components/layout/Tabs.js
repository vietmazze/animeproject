import React, { Fragment, useState, useEffect } from "react";
import Tab from "./Tab";
import Table from "./Table";

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
      <div className=" flex border-b ">
        <h2 className="pr-8 py-2 font-semibold ">RECENTLY UPDATED</h2>
        <ul className="flex ">
          {tab.map(child => (
            <Tab
              onClick={onClickTabItem}
              activeTab={activeTab}
              label={child.label}
              key={child.label}
            />
          ))}
        </ul>

        {/* Put your Table here
      <Table tab={tab} anime={anime} activeTab={activeTab} /> */}
      </div>
    </div>
  );
};

export default Tabs;
