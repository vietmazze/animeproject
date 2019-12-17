import React from "react";
import { storiesOf } from "@storybook/react";
import Comments from "../components/layout/Comments";

const comments = [
  {
    user: "Winzkay",
    comment:
      "Despite me hating recap episodes, this one was well put together and I needed it to be honest 😅 I want a meat bun"
  }
];

storiesOf("CommentBox", module).add("default", () => (
  <Comments comments={comments} />
));
