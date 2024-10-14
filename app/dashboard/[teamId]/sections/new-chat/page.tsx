import { Forward } from "lucide-react";
import React from 'react';
import './chat.css';

const ForwardIcon = () => (
  <Forward className="h-6 w-6" style={{ strokeWidth: "1.5" }} />
);

export default function NewChatPage() {
  return (
    <div>
      <title>New Chat</title>
      <div id="mediumpadding"></div>
      <div id="smallpadding"></div>
      <div className="welcometext">How can I help you today?</div>
      <div id="mediumpadding"></div>
      <div className="chatcontainer" translate="no" id="prompt-area">
        <div className="input-container">
          <input className="chatbox" placeholder="Message Flow" />
          <button className="send-icon">
            <ForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
