import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const MainAnime = () => {
  const divStyle = {
    backgroundImage:
      "url(" +
      "https://static.akacdn.ru/files/images/2019/08/f66b30a5672beef7ae6654d540390544.jpg-w650-h350" +
      ")"
  };

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
  return (
    <div className="h-40 w-full">
      <div
        className="  relative h-full  bg-cover bg-center bg-no-repeat text-center  "
        style={divStyle}
      >
        <div className="absolute bottom-1/2 left-1/2 opacity-75">
          <a className="" href={anime[0].url}>
            <FontAwesomeIcon icon={faPlayCircle} size="3x" />
          </a>
        </div>

        <div className="absolute bottom-0 text-white px-2">
          <a className=" text-white" href={anime[0].url}>
            {anime[0].title}
          </a>
          <div className=" flex row text-xs   ">
            <span className="pr-2">
              <FontAwesomeIcon icon={faEye} /> {anime[0].view}
            </span>
            <span>
              <FontAwesomeIcon icon={faHeart} /> {anime[0].favorited}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAnime;
