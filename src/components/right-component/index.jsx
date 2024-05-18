import React, { useState } from "react";
import "./index.css";
import { UserChats } from "./userChats";

const RightComponent = ({ selectedUser }) => {
    const [textValue, setTextValue] = useState("");
    const [userChatsData, setUserChatData] = useState({
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
    });
    const selectedUserChats = userChatsData[selectedUser.id];

    const handleTextChange = (e) => setTextValue(e.target.value);

    const sendMessage = (e) => {
        if (textValue?.trim()?.length > 0) {
            const updatedUserChat = [...selectedUserChats, textValue];

            setUserChatData((s) => ({
                ...s,
                [selectedUser.id]: updatedUserChat,
            }));
            setTextValue("");
        }
    };
    return (
        <div className="parent-container">
            <div className="heading-1">
                <div className="heading-x">{selectedUser?.name}</div>

                <div className="number">{selectedUser?.number}</div>
            </div>
            <div className="chats">
                <UserChats selectedUserChats={selectedUserChats} />
            </div>
            <div className="text-field">
                <input
                    type="text"
                    onChange={handleTextChange}
                    value={textValue}
                    placeholder="Type a message"
                    style={{
                        background: "#fff",
                        bottom: 0,
                        color: "black",
                        width: "90%",
                        height: "20px",
                    }}
                    // onKeyDown={sendMessage}
                />
                <button className="button" onClick={sendMessage}>
                    Click here to send message
                </button>
            </div>
        </div>
    );
};

export default RightComponent;
