import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Tabs from "../components/layout/Tabs";

export const defaultTab = [
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
export const defaultAnime = [
  {
    id: 1,
    title: "Vinland Saga",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1500/103005.jpg?s=b21dbd168612f531ce4eec9bd53e272b"
  },
  {
    id: 2,
    title: "One Piece",
    image_url:
      "https://cdn.myanimelist.net/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14"
  },
  {
    id: 3,
    title: "Dr. Stone",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1613/102576.jpg?s=44aa2af9cfc2523f9feb07d2b13d4196"
  }
];

storiesOf("Tabs", module).add("default", () => (
  <Tabs tab={defaultTab} anime={defaultAnime} />
));
