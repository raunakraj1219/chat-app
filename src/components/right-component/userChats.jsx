import { useState } from "react";
import "./index.css";

export const UserChats = ({ selectedUserChats }) => {
    return (
        <div className="chat-container">
            {selectedUserChats?.map((chat) => (
                <div className="single-chat">{chat}</div>
            ))}
        </div>
    );
};
