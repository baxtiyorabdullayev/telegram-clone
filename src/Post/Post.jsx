import "./Post.css";
import React, { useState } from "react";
import axios from "axios";
import { POST_URL } from "../dataBase";

// icons
import { FiHeart } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

function Post({ text, like, sendTime, id }) {
  const [likeQty, setLikeQty] = useState(like);

  const likeBtn = () => {
    setLikeQty(likeQty + 1);
  };

  const deleteBtn = () => {
    axios.delete(`http://localhost:7000/message/${id}`);
  };
  return (
    <div className="post">
      <div className="up">
        <p>{text}</p>
      </div>
      <div className="down">
        <button onClick={likeBtn}>
          <FiHeart />
        </button>
        <span>{likeQty} likes</span>
        <button>
          <BiTime />
        </button>
        <span>{sendTime}</span>
        <button>
          <AiOutlineEdit />
        </button>
        <button onClick={deleteBtn}>
          <MdOutlineDeleteOutline />
        </button>
      </div>
      <hr />
    </div>
  );
}

export default Post;
