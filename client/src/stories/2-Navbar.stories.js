import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Navbar from "../components/layout/Navbar";

storiesOf("Navbar", module).add("default", () => <Navbar />);
