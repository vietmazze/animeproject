import { configure } from "@storybook/react";
import requireContext from "require-context.macro";
import { addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";

import "../src/styles/tailwind.css";

addParameters({
  options: {
    theme: themes.black
  }
});

const req = requireContext("../src/stories", true, /\.stories\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
