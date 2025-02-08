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

// Dynamically create 50 event-emitting routes
for (let i = 1; i <= 50; i++) {
  app.get(`/emit-event_${i}`, (req, res) => {
    io.emit(`my-event_${i}`, "Tizen OS");
    res.send(`Event_${i} emitted`);
  });
}

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
