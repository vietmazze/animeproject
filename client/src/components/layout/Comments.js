import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Comments = ({ comments }) => {
  const [commentLoading, setCommentLoading] = useState(true);
  const [replyLoading, setReplyLoading] = useState(false);

  const onReplyClick = () => {
    setReplyLoading(!replyLoading);
  };
  let reply;

  if (replyLoading === true) {
    reply = (
      <div className='w-11/12 m-4'>
        <input
          type='text'
          className='h-24 w-full'
          placeholder='Join the discussion...'
        />
      </div>
    );
  } else {
    console.log("empty");
  }

  return (
    <div className='flex justify-start '>
      <div className='w-full lg:w-9/12 '>
        <div className='flex flex-row'>
          <div className='lg:w-5 m-4 '>
            <span className='fa-layers fa-fw '>
              <FontAwesomeIcon
                icon={faUser}
                size='3x'
                color='white'
                transform='down-4'
              />
            </span>
          </div>
          <div className='w-11/12 m-4'>
            <input
              type='text'
              className='h-24 w-full'
              placeholder='Join the discussion...'
            />
          </div>
        </div>
        <button className='bg-blue-500 text-white py-2 px-4 flex  ml-auto m-4'>
          Submit
        </button>
        <div>
          {!commentLoading ? (
            <div> Be the first to comment ... </div>
          ) : (
            <div>
              <div className='flex flex-row'>
                <div className='lg:w-5 m-4 '>
                  <span className='fa-layers fa-fw '>
                    <FontAwesomeIcon
                      icon={faUser}
                      size='3x'
                      color='white'
                      transform='down-4'
                    />
                  </span>
                </div>
                <div className='w-11/12 m-4'>
                  <div className='flex flex-col'>
                    <h3> Username</h3>
                    <p>Some comment</p>
                  </div>
                  <button onClick={onReplyClick}>Reply</button>
                </div>
              </div>
            </div>
          )}
        </div>
        {reply}
      </div>
    </div>
  );
};

export default Comments;
