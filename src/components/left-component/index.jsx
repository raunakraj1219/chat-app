import React from "react";
import "./index.css";
import { USER_DATA } from "../../constants/userData";

const LeftComponent = ({ handleUserClick, selectedUser }) => {
    return (
        <div className="parent-container">
            <div className="heading">Chat</div>
            <div className="user-list">
                {USER_DATA.map((user) => {
                    return (
                        <div
                            className={`${
                                user.id === selectedUser.id
                                    ? "single-user-selected"
                                    : "single-user"
                            }`}
                            onClick={() => handleUserClick(user.id)}
                        >
                            {user.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LeftComponent;
