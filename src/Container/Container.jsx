import "./Container.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { POST_URL } from "../dataBase";
import Output from "../Output/Output";
import Input from "../Input/Input";

function Container() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${POST_URL}/message`).then((res) => setPosts(res.data));
  }, [posts]);

  return (
    <div className="container">
      <Output posts={posts} />
      <Input />
    </div>
  );
}

export default Container;
