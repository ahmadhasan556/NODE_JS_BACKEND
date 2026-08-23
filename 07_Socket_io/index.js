import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["POST", "GET"],
    credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("Welcome to the realtime chatapp");
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
  // join and leave room
  socket.on("join", (roomId) => {
    socket.join(roomId);
  });
  socket.on("leave", (roomId) => {
    socket.leave(roomId);
  });

  socket.on("send", (message) => {
    console.log("Message received:", message);
    io.to(message.room).emit("message", message);
  });
});

server.listen(8000, () => {
  console.log("Server connected");
});
