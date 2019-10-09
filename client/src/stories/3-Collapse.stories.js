import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Collapse from "../components/layout/Collapse";

storiesOf("Collapse", module)
  .add("default", () => <Collapse task={{ state: "default" }} />)
  .add("invisible", () => <Collapse task={{ state: "invisible" }} />);
