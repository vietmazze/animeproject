import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Tiptool from "../components/layout/Tiptool";

const defaultAnime = [
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

export const activeTab = "Popular";

storiesOf("Tiptool", module).add("default", () => <Tiptool />);
