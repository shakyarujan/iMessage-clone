import React from 'react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import './css/imessage.css';

function Imessage() {
    return (
        <div className="imessage">
            {/* Sidebar */}
            <Sidebar />
            {/* Chat */}
            <Chat />
        </div>
    )
}

export default Imessage
