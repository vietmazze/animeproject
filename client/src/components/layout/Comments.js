import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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
        <button className='bg-blue-500 text-white py-2 px-4 flex  ml-auto m-4'>
          Submit
        </button>
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
            <h1>LOG IN WITH</h1>

            <div className='flex flex-row'>
              <button className='fa-layers fa-fw rounded-full bg-red-300 items-center justify-center mr-3'>
                <FontAwesomeIcon icon={faGoogle} size='1x' color='black' />
              </button>
              <button className='fa-layers fa-fw rounded-full bg-blue-300 mr-3'>
                <FontAwesomeIcon icon={faFacebookF} size='1x' color='black' />
              </button>
              <button className='fa-layers fa-fw rounded-full bg-blue-300 '>
                <FontAwesomeIcon icon={faTwitter} size='1x' color='black' />
              </button>
              <button className='bg-blue-500 text-white  px-4 flex  ml-auto '>
                Submit
              </button>
            </div>
          </div>
        </div>

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
                  <div className='flex flex-row '>
                    <button className='fa-layers fa-fw hover:opacity-25'>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        size='xs'
                        color='white'
                        transform='down-4'
                      />
                    </button>

                    <button className='fa-layers fa-fw hover:opacity-25'>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        size='xs'
                        color='white'
                        transform='down-4'
                      />
                    </button>

                    <button
                      className='hover:opacity-25 text-white pl-2'
                      onClick={onReplyClick}
                    >
                      Reply
                    </button>
                  </div>

                  {reply}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
