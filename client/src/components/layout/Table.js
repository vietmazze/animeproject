import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import TipToolLayout from "./TipToolLayout";
import ReactTooltip from "react-tooltip";
const Table = ({ tab, anime, activeTab }) => {
  const toggleHover = () => {};
  return (
    //This is not presentational
    <div className=''>
      {tab.map(child => {
        if (child.label !== activeTab) return undefined;
        return (
          <Fragment>
            {activeTab === "Recent" ? (
              <p> Recent</p>
            ) : (
              <div className='flex flex-row flex-wrap justify-around '>
                {anime.slice(0, 8).map(item => (
                  <div className='px-2 py-2 mb-4 h-325 w-250 '>
                    <div className='  '>
                      <Link to={`/watch/${item.title}`}>
                        <img
                          src={item.image_url}
                          alt=''
                          className='h-237 w-full'
                          data-tip
                          data-for='overridePosition'
                        ></img>
                      </Link>
                    </div>
                    <div className=' text-wrap title-text object-contain w-full text-center '>
                      <Link to={`/watch/${item.title}`} className=''>
                        {item.title}
                      </Link>
                    </div>

                    <ReactTooltip
                      id='overridePosition'
                      overridePosition={(
                        { left, top },
                        currentEvent,
                        currentTarget,
                        node
                      ) => {
                        const d = document.documentElement;

                        left = Math.min(d.clientWidth - node.clientWidth, left);
                        top = Math.min(d.clientHeight - node.clientHeight, top);

                        left = Math.max(0, left);
                        top = Math.max(0, top);

                        return { top, left };
                      }}
                      getContent={() => {
                        return <TipToolLayout anime={anime} />;
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Table;
