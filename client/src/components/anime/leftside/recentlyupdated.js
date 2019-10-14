import React, { useState, useEffect } from "react";
import Tab from "../../../components/layout/Tab";
import Table from "../../../components/layout/Table";
import axios from "axios";

const Recently = () => {
  const [activeTab, setActive] = useState("Popular");
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState([
    {
      label: "Popular",
      id: 1,
      children: "this is recent tab"
    },
    {
      label: "New",
      id: 2,
      children: "this is recent tab"
    },
    {
      label: "Recent",
      id: 3,
      children: "this is recent tab"
    }
  ]);

  const onClickTabItem = tab => {
    setActive(tab);
    getAnime();
  };

  const getAnime = async () => {
    setLoading(true);
    const res = await axios.get("https://api.jikan.moe/v3/top/anime/1/airing");
    setAnime(res.data.top);
    setLoading(false);
  };

  useEffect(() => {
    getAnime();

    // eslint-disable-next-line
  }, []);

  const className = "tab-list-item";

  return (
    <div className="tabs px-4 py-4 mt-16 h-full border border-gray-500 ">
      <div className=" flex border-b ">
        <h2 className="pr-4 py-2 font-semibold ">RECENTLY UPDATED</h2>
        <ul className="flex border-b">
          {tab.map(child => (
            <Tab
              onClick={onClickTabItem}
              activeTab={activeTab}
              label={child.label}
              key={child.label}
            />
          ))}
        </ul>
      </div>
      <div>
        {!loading && anime.length === 0 ? (
          <p>Test failed</p>
        ) : (
          <Table tab={tab} anime={anime} activeTab={activeTab} />
        )}
      </div>
      {/* Put your Table here */}
    </div>
  );
};

export default Recently;
