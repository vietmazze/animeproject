import React, { useEffect } from "react";
import TipToolLayout from "./TipToolLayout";
import ReactTooltip from "react-tooltip";

const Tiptool = () => {
  const anime = [
    {
      id: 1,
      title: "Vinland Saga",
      img:
        "https://cdn.myanimelist.net/images/anime/1500/103005.jpg?s=b21dbd168612f531ce4eec9bd53e272b",
      url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",
      view: 12403,
      favorited: 500,
      genre: "Action,Sports",
      score: "4.8 / 5",
      date_air: "July 31,2019",
      status: "Airing",
      description:
        "Riku Haruma enters high school without a future in sight. He sees people playing like monsters on the ground, jumping higher than anyone else, running"
    }
  ];

  // const animeContent = anime => {
  //   return (
  // <div className="flex flex-col relative bg-gray-700  text-white w-3/5  h-325">
  //   <div className="px-3 ">
  //     <h1 className="text-3xl text-purple-500">{anime[0].title} </h1>
  //     <div className="border-0 bg-gray-500 font-thin text-sm mb-2">
  //       Episode 11/12
  //     </div>
  //     <div className=" text-base mb-2 h-12">
  //       <p className="font-hairline text-wrap h-full break-normal truncate">
  //         {anime[0].description}{" "}
  //       </p>
  //     </div>
  //     <div className="font-bold text-base mb-2 ">
  //       <p>Scores: {anime[0].score}</p>
  //       <p>Status: {anime[0].status} </p>
  //       <p> Date aired: {anime[0].date_air}</p>
  //       <p>Genre: {anime[0].genre} </p>
  //     </div>
  //   </div>
  //   <div className="absolute bottom-0 w-full bg-purple-500 text-center h-12  ">
  //     <button className="text-lg"> WATCH NOW!</button>
  //   </div>
  // </div>;
  //   );
  // };

  // tippy("#buttonAnime", {
  //   content: animeContent,
  //   animation: "fade",
  //   animationFill: false,
  //   duration: 200,
  //   theme: "ajax"
  // });

  return (
    <div className="py-5 text-center">
      <button data-tip data-for="overridePosition">
        Testing
      </button>
      <ReactTooltip
        id="overridePosition"
        overridePosition={(
          { left, top },
          currentEvent,
          currentTarget,
          node
        ) => {
          const d = document.documentElement;

          left = Math.min(d.clientWidth - node.clientWidth, left);
          top = Math.min(d.clientHeight - node.clientHeight, top);

          left = Math.max(0, left);
          top = Math.max(0, top);

          return { top, left };
        }}
        getContent={() => {
          return <TipToolLayout anime={anime} />;
        }}
      />
    </div>
  );
};

export default Tiptool;
