import "./Output.css";
import React from "react";
import Post from "../Post/Post";

function Output({ posts }) {
  return (
    <div className="output">
      {posts.map((element, index) => (
        <Post {...element} key={index} />
      ))}
    </div>
  );
}

export default Output;
