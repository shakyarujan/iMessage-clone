import { Avatar } from "@material-ui/core";
import React, { forwardRef, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "../css/message.css";
import { selectUser } from "../features/userSlice";
import * as timeago from "timeago.js";

const Message = forwardRef(
  (
    { id, contents: { timestamp, displayName, email, message, photo, uid } },
    ref
  ) => {
    const user = useSelector(selectUser);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [message]);

    return (
      <div
        ref={ref}
        className={`message ${user.email === email && "message__sender"} `}
      >
        <Avatar className="message__photo" src={photo} />
        <p>{message}</p>
        <small>{timeago.format(new Date(timestamp?.toDate()))}</small>
        <div ref={messagesEndRef} />
      </div>
    );
  }
);

export default Message;
