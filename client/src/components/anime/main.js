import React, { useEffect } from "react";
import Leftside from "./leftside/leftside";
import Sidebar from "./sidebar/sidebar";
import { connect } from "react-redux";
import Footer from "../layout/Footer";
const Main = ({ anime: { animes, loading, login } }) => {
  // useEffect(() => {
  //   //eslint-disable-next-line
  // }, [login]);

  //   useEffect(() => {
  //     onClickTabItem(tab);
  //     // eslint-disable-next-line
  //   }, []);

  return (
    <div id='anime' className='container mx-auto mt-1 mb-5'>
      <div className='md:flex'>
        <div className='md:w-3/5 lg:w-8/12'>
          <Leftside />
        </div>
        <div className='  md:w-2/5 lg:w-4/12 pl-2 border border-gray-500'>
          <Sidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
};
const mapStateToProps = state => ({
  anime: state.anime
});

export default connect(mapStateToProps)(Main);
