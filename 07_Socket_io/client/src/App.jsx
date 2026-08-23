import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
import JoinGroup from "./components/JoinGroup";
import ChatRoom from "./components/ChatRoom";

const SOCKET_URL = "http://localhost:8000"; // server url
let socket;
function App() {
  const [userInfo, setUserInfo] = useState({ username: "", room: "" });
  const [joined, setJoined] = useState();

  useEffect(() => {
    socket = io(SOCKET_URL);

    socket.on("connect", () => {
      console.log("connected to server");
    });
    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleJoin = ({ username, room }) => {
    setUserInfo({ username, room });
    if (socket) {
      socket.emit("join", room);
    }
    setJoined(true);
  };

  const handleLeave = () => {
    setUserInfo({ username: "", room: "" });
    setJoined(false);
  };

  return (
    <>
      {!joined ? (
        <JoinGroup onJoin={handleJoin} />
      ) : (
        <ChatRoom
          username={userInfo.username}
          room={userInfo.room}
          socket={socket}
          onLeave={handleLeave}
        />
      )}
    </>
  );
}

export default App;
