import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Carousel from "../components/layout/Carousel";

import pic1 from "../img/slideshow/image1.jpg";
import pic2 from "../img/slideshow/image2.jpg";
import pic3 from "../img/slideshow/image3.jpg";

export const defaultAnimes = [
  {
    image: pic1,
    title: "Hunter x Hunter",
    id: "1",
    text: "Some text"
  },
  {
    image: pic2,
    title: "Neverland",
    id: "2",
    text: "Some text"
  },
  {
    image: pic3,
    title: "Vinland Saga",
    id: "3",
    text: "Some text"
  }
];

storiesOf("Carousel", module).add("default", () => (
  <Carousel anime={defaultAnimes} />
));
