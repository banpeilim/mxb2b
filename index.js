const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server);

app.get("/", (req, res) => {
  res.write(`<h1>Samsung</h1>`);
  res.end();
});

io.on("connection", (socket) => {
  socket.on("send_message", () => {
    socket.emit("receive_message", "This is Lim Ban Pei");
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
