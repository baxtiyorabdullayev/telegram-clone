import "./Input.css";
import React, { useState } from "react";
import axios from "axios";

//urls form db
import { POST_URL } from "../dataBase";

// react icon
import { GrSend } from "react-icons/gr";

function Input() {
  const [text, setText] = useState("");
  // get time
  const date = new Date();

  const post = {
    text,
    sendTime: date.toLocaleTimeString(),
    like: 0,
  };

  const sendText = (e) => {
    e.preventDefault();
    axios.post(`${POST_URL}/message`, post);
    setText("");
  };

  return (
    <div className="input">
      <form onSubmit={sendText}>
        <input
          value={text}
          type="text"
          placeholder="Text..."
          className="inputarea"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="sendBtn">
          <GrSend></GrSend>
        </button>
      </form>
    </div>
  );
}

export default Input;
