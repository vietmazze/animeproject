import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Carousel from "../components/layout/Carousel";



export const defaultAnimes = [
  {
    
    title: "Hunter x Hunter",
    id: "1",
    text: "Some text"
  },
  {
    
    title: "Neverland",
    id: "2",
    text: "Some text"
  },
  {
    
    title: "Vinland Saga",
    id: "3",
    text: "Some text"
  }
];

storiesOf("Carousel", module).add("default", () => (
  <Carousel anime={defaultAnimes} />
));
