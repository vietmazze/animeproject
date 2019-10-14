import React, { Fragment } from "react";

const Sidebar = ({ tab, anime, activeTab }) => {
  const defaultAnime = [
    {
      id: 1,
      title: "Vinland Saga",
      img:
        "https://cdn.myanimelist.net/images/anime/1500/103005.jpg?s=b21dbd168612f531ce4eec9bd53e272b",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal"
    },
    {
      id: 2,
      title: "One Piece",
      img:
        "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal"
    },
    {
      id: 3,
      title: "Dr. Stone",
      img:
        "https://cdn.myanimelist.net/images/anime/1613/102576.jpg?s=44aa2af9cfc2523f9feb07d2b13d4196",
      url: "https://myanimelist.net/anime/38691/Dr_Stone"
    },
    {
      id: 4,
      title: "Fate/Grand Order: Zettai Majuu Sensen Babylonia",
      img:
        "https://cdn.myanimelist.net/images/anime/1194/103420.jpg?s=ab22c4cdf9f5805eee017284ef956772",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal"
    },
    {
      id: 5,
      title: "Mugen no Juunin: Immortal",
      img:
        "https://cdn.myanimelist.net/images/anime/1263/102516.jpg?s=b7ea90d71a23ab91720f2e03cbd67225",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal"
    },
    {
      id: 6,
      title: "Ani ni Tsukeru Kusuri wa Nai! 3",
      img:
        "https://cdn.myanimelist.net/images/anime/1756/103441.jpg?s=87077ad9646a34e21c01cfb1bf160cd0",
      url: "https://myanimelist.net/anime/39959/Ani_ni_Tsukeru_Kusuri_wa_Nai_3"
    }
  ];
  return (
    //This is not presentational
    <div className="flex ">
      <div className="w-4/12 bg-gray-500 h-325">
        <div className="flex row">
          <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            <img src={defaultAnime[0].img} alt="" />
          </div>
          <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            <h2>{defaultAnime[0].title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
