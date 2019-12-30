import React, { useEffect } from "react";
import Leftside from "./leftside/leftside";
import Sidebar from "./sidebar/sidebar";
import { connect } from "react-redux";

const Main = ({ anime: { animes, loading, login } }) => {
  // useEffect(() => {
  //   //eslint-disable-next-line
  // }, [login]);

  //   useEffect(() => {
  //     onClickTabItem(tab);
  //     // eslint-disable-next-line
  //   }, []);

  return (
    <div id='anime' className='container mx-auto mt-1'>
      <div className=' flex  '>
        <div className='   w-full lg:w-9/12 '>
          <Leftside />
        </div>
        <div className=' w-full md:w-3/12 lg:w-3/12 pl-2 border border-gray-500'>
          <Sidebar />
        </div>
      </div>

      {/* Put the login modal here but display hidden */}
    </div>
  );
};
const mapStateToProps = state => ({
  anime: state.anime
});

export default connect(mapStateToProps)(Main);
