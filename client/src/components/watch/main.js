import React from "react";
import VideoPlayer from "../layout/Videoplayer";
import Comment from "../layout/Comments";
import Footer from "../layout/Footer";

const main = () => {
  return (
    <div className='container mx-auto mt-1 mb-5'>
      <VideoPlayer />
      <Comment />
      <Footer />
    </div>
  );
};

export default main;
