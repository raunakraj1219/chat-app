import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LeftComponent from "./components/left-component";
import RightComponent from "./components/right-component";
import { USER_DATA } from "./constants/userData";

function App() {
    const [selectedUser, setSelectedUser] = useState(USER_DATA[0]);

    const handleUserClick = (selectedId) => {
        // const currUser = USER_DATA.find((data) => data.id === id);
        const currUser = USER_DATA.find((user) => user.id === selectedId);

        setSelectedUser(currUser);
    };
    return (
        <div className="parent">
            <div className="left-comp">
                <LeftComponent
                    selectedUser={selectedUser}
                    handleUserClick={handleUserClick}
                />
            </div>
            <div className="right-comp">
                <RightComponent selectedUser={selectedUser} />
            </div>
        </div>
    );
}

export default App;
