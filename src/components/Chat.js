import { IconButton } from '@material-ui/core';
import React, {useState} from 'react';
import MicNoneIcon from '@material-ui/icons/MicNone';
import '../css/chat.css';

function Chat() {

    const sendMessage = (e) => {
        e.preventDefault();

        setInput("");
    }

    const [input, setInput] = useState("");

    return (
        <div className="chat">

           {/* chatHeader */}
           <div className="chat__header">
                <h4>To: <span className="chat__name">Channel Name</span></h4>
                <strong>Details</strong>
           </div>

           {/* chatMessages */}
           <div className="chat__message">
               <h3>Iama the message</h3>
               <h3>Iama the message</h3>
               <h3>Iama the message</h3>
           </div>


           {/* chatInput */}
           <div className="chat__input">
               <form>
                   <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="iMessage" type="text"/>
                   <button onClick={sendMessage}>Send Message</button>
               </form>
               
               <IconButton>
                   <MicNoneIcon className="chat__mic" />
               </IconButton>
           </div>
        </div>
    )
}

export default Chat
