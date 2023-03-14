const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/emit-event_1", (req, res) => {
  io.emit("my-event_1", "Tizen OS");
  res.send("Event_1 emitted");
});

app.get("/emit-event_2", (req, res) => {
  io.emit("my-event_2", "Tizen OS");
  res.send("Event_2 emitted");
});

app.get("/emit-event_3", (req, res) => {
  io.emit("my-event_3", "Tizen OS");
  res.send("Event_3 emitted");
});

app.get("/emit-event_4", (req, res) => {
  io.emit("my-event_4", "Tizen OS");
  res.send("Event_4 emitted");
});

app.get("/emit-event_5", (req, res) => {
  io.emit("my-event_5", "Tizen OS");
  res.send("Event_5 emitted");
});

app.get("/emit-event_6", (req, res) => {
  io.emit("my-event_6", "Tizen OS");
  res.send("Event_6 emitted");
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("send_message", (data) => {
    socket.emit("receive_message", data);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("SERVER IS RUNNING");
});
