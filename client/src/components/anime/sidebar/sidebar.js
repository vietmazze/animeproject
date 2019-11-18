import React, { Fragment, useState, useEffect } from "react";
import TopAnime from "./topAnime";
import ActiveAnime from "./activeAnime";
import Tab from "../../layout/Tab";
import Card from "../../layout/Card";

const SideBar = () => {
  const [activeTab, setActive] = useState("Popular");

  const tab = [
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
  ];
  const anime = [
    {
      id: 2,
      title: "One Piece",
      image_url:
        "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",
      view: 124321,
      favorited: 500
    },
    {
      id: 3,
      title: "Dr. Stone",
      image_url:
        "https://cdn.myanimelist.net/images/anime/1613/102576.jpg?s=44aa2af9cfc2523f9feb07d2b13d4196",
      url: "https://myanimelist.net/anime/38691/Dr_Stone",
      view: 33211,
      favorited: 500
    },
    {
      id: 4,
      title: "Fate/Grand Order: Zettai Majuu Sensen Babylonia",
      image_url:
        "https://cdn.myanimelist.net/images/anime/1194/103420.jpg?s=ab22c4cdf9f5805eee017284ef956772",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",
      view: 99992,
      favorited: 500
    },
    {
      id: 5,
      title: "Mugen no Juunin: Immortal",
      image_url:
        "https://cdn.myanimelist.net/images/anime/1263/102516.jpg?s=b7ea90d71a23ab91720f2e03cbd67225",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",
      view: 1241,
      favorited: 500
    },
    {
      id: 6,
      title: "Ani ni Tsukeru Kusuri wa Nai! 3",
      image_url:
        "https://cdn.myanimelist.net/images/anime/1756/103441.jpg?s=87077ad9646a34e21c01cfb1bf160cd0",
      url: "https://myanimelist.net/anime/39959/Ani_ni_Tsukeru_Kusuri_wa_Nai_3",
      view: 12351,
      favorited: 500
    }
  ];

  const onClickTabItem = tab => {
    setActive(tab);
  };
  return (
    <div className="tabs px-4 mt-2 h-full  ">
      <div className=" flex flex-col  ">
        <ul className="flex ">
          <h2 className="pr-4 py-2 font-semibold ">TOP ANIME</h2>
          {tab.map(child => (
            <Tab
              onClick={onClickTabItem}
              activeTab={activeTab}
              label={child.label}
              key={child.label}
            />
          ))}
        </ul>
        <ActiveAnime tab={tab} anime={anime} activeTab={activeTab} />
        <TopAnime tab={tab} anime={anime} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default SideBar;
