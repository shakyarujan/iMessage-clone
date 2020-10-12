import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from "@material-ui/icons/RateReview";

import "../css/sidebar.css";
import SidebarChat from "./SidebarChat";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";

function Sidebar() {
  const user = useSelector(selectUser);

  const [chats, setChats] = useState([]);

  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const addChat = () => {
    const chatName = prompt("Please add the channel name");

    if (chatName) {
      db.collection("chats").add({
        chatName: chatName,
      });
    } else {
      alert("Cannot add channel");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton onClick={() => auth.signOut()}>
          <Avatar src={user.photo} className="sidebar__avatar" />
        </IconButton>
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
        <IconButton
          variant="outlined"
          className="sidebar__inputButton"
          onClick={addChat}
        >
          <RateReviewIcon />
        </IconButton>
      </div>

      <div className="sidebar__chats">
        {chats.map(({ id, data: { chatName } }) => (
          <SidebarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
