import React from "react";
import { storiesOf } from "@storybook/react";
import DescriptionBox from "../components/layout/DescriptionBox";

export const defaultAnime = [
  {
    id: 1,
    title: "Vinland Saga",
    img:
      "https://cdn.myanimelist.net/images/anime/1500/103005.jpg?s=b21dbd168612f531ce4eec9bd53e272b",
    url: "https://myanimelist.net/anime/39806/Mugen_no_Juunin__Immortal",
    view: 12403,
    favorited: 500,
    type: "Tv Series",
    Studios: "MadHouse",
    date_aired: "April 02, 2019",
    status: "Airing",
    genre: "Comedy, School",
    score: 8.32,
    rating: 9.2,
    premiered: "Spring 20190",
    duration: 24,
    quality: "HD",
    views: 342512,
    description:
      "Picking up the next year after the end of the fall tournament, Seidou High School baseball team battle it out with new and old faces as they begin their tournament run at Koshien."
  }
];

storiesOf("DescriptionBox", module).add("default", () => (
  <DescriptionBox anime={defaultAnime} />
));
