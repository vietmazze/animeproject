import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const TopAnime = () => {
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
      id: 1,
      title: "Vinland Saga",
      img:
        "https://cdn.myanimelist.net/images/anime/1500/103005.jpg?s=b21dbd168612f531ce4eec9bd53e272b",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",
      view: 12403,
      favorited: 500
    },
    {
      id: 2,
      title: "One Piece",
      img:
        "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",
      view: 124321,
      favorited: 500
    },
    {
      id: 3,
      title: "Dr. Stone",
      img:
        "https://cdn.myanimelist.net/images/anime/1613/102576.jpg?s=44aa2af9cfc2523f9feb07d2b13d4196",
      url: "https://myanimelist.net/anime/38691/Dr_Stone",
      view: 33211,
      favorited: 500
    },
    {
      id: 4,
      title: "Fate/Grand Order: Zettai Majuu Sensen Babylonia",
      img:
        "https://cdn.myanimelist.net/images/anime/1194/103420.jpg?s=ab22c4cdf9f5805eee017284ef956772",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",
      view: 99992,
      favorited: 500
    },
    {
      id: 5,
      title: "Mugen no Juunin: Immortal",
      img:
        "https://cdn.myanimelist.net/images/anime/1263/102516.jpg?s=b7ea90d71a23ab91720f2e03cbd67225",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",
      view: 1241,
      favorited: 500
    },
    {
      id: 6,
      title: "Ani ni Tsukeru Kusuri wa Nai! 3",
      img:
        "https://cdn.myanimelist.net/images/anime/1756/103441.jpg?s=87077ad9646a34e21c01cfb1bf160cd0",
      url: "https://myanimelist.net/anime/39959/Ani_ni_Tsukeru_Kusuri_wa_Nai_3",
      view: 12351,
      favorited: 500
    }
  ];

  const activeTab = "Popular";
  return (
    //This is not presentational

    <div>
      {anime.map(item => {
        return (
          <div className="flex flex-row items-center border-b border-gray-700 h-30   w-64 ml-2 text-white">
            <div className="border border-solid border-gray-500  px-3 ">
              <i className="  ">{item.id}</i>
            </div>
            <div className="  h-20 w-12 ml-2 ">
              <a href={item.url}>
                {" "}
                <img
                  className="object-cover h-full w-full"
                  src={item.img}
                  alt=""
                />
              </a>
            </div>
            <div className="   ml-3 w-40 font-style: italic">
              <a href={item.url}>
                <h2>{item.title}</h2>
              </a>
              <div className="flex row text-xs ">
                <span className="pr-2">
                  <FontAwesomeIcon icon={faEye} /> {item.view}
                </span>
                <span>
                  <FontAwesomeIcon icon={faHeart} /> {item.favorited}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopAnime;
