import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { getAiring } from "../../../actions/animeAction";

const Headline = ({ anime: { animes, loading }, getAiring }) => {
  // const [anime, setAnime] = useState([]);
  // const [loading, setLoading] = useState(false);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  useEffect(() => {
    getAiring();
    // eslint-disable-next-line
  }, []);

  // const getAnime = async () => {
  //   setLoading(true);
  //   const res = await axios.get("https://api.jikan.moe/v3/top/anime/1/airing");
  //   setAnime(res.data.top);
  //   setLoading(false);
  // };

  if (loading || animes === null) {
    return <h4>Loading</h4>;
  }

  return (
    // <div className="container mx-auto  mt-2">
    //   <div className="flex flex-wrap">
    //     <div className="w-8/12 ">
    <div>
      {!loading && animes.length === 0 ? (
        <p>Test failed</p>
      ) : (
        <AwesomeSlider bullets={true}>
          {animes.slice(0, 3).map(item => (
            <div data-src={item.image_url}>
              {" "}
              <div className=" absolute bottom-0 left-0 bg-gray-700 opacity-50  py-4 mb-auto h-24 w-full text-white">
                <h3>Title:{item.title}</h3>
                <h4>Score: {item.score}</h4>
                <h4>Rank: {item.rank}</h4>
              </div>
            </div>
          ))}
        </AwesomeSlider>
      )}
    </div>
    //     </div>
    //   </div>
    // </div>
  );
};

const mapStateToProps = state => ({
  anime: state.anime
});
export default connect(mapStateToProps, { getAiring })(Headline);
