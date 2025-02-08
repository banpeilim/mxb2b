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

// Event 1
app.get("/emit-event_1", (req, res) => {
  io.emit("my-event_1", "Tizen OS");
  res.send("Event_1 emitted");
});

// Event 2
app.get("/emit-event_2", (req, res) => {
  io.emit("my-event_2", "Tizen OS");
  res.send("Event_2 emitted");
});

// Event 3
app.get("/emit-event_3", (req, res) => {
  io.emit("my-event_3", "Tizen OS");
  res.send("Event_3 emitted");
});

// Event 4
app.get("/emit-event_4", (req, res) => {
  io.emit("my-event_4", "Tizen OS");
  res.send("Event_4 emitted");
});

// Event 5
app.get("/emit-event_5", (req, res) => {
  io.emit("my-event_5", "Tizen OS");
  res.send("Event_5 emitted");
});

// Event 6
app.get("/emit-event_6", (req, res) => {
  io.emit("my-event_6", "Tizen OS");
  res.send("Event_6 emitted");
});

// Event 7
app.get("/emit-event_7", (req, res) => {
  io.emit("my-event_7", "Tizen OS");
  res.send("Event_7 emitted");
});

// Event 8
app.get("/emit-event_8", (req, res) => {
  io.emit("my-event_8", "Tizen OS");
  res.send("Event_8 emitted");
});

// Event 9
app.get("/emit-event_9", (req, res) => {
  io.emit("my-event_9", "Tizen OS");
  res.send("Event_9 emitted");
});

// Event 10
app.get("/emit-event_10", (req, res) => {
  io.emit("my-event_10", "Tizen OS");
  res.send("Event_10 emitted");
});

// Event 11
app.get("/emit-event_11", (req, res) => {
  io.emit("my-event_11", "Tizen OS");
  res.send("Event_11 emitted");
});

// Event 12
app.get("/emit-event_12", (req, res) => {
  io.emit("my-event_12", "Tizen OS");
  res.send("Event_12 emitted");
});

// Event 13
app.get("/emit-event_13", (req, res) => {
  io.emit("my-event_13", "Tizen OS");
  res.send("Event_13 emitted");
});

// Event 14
app.get("/emit-event_14", (req, res) => {
  io.emit("my-event_14", "Tizen OS");
  res.send("Event_14 emitted");
});

// Event 15
app.get("/emit-event_15", (req, res) => {
  io.emit("my-event_15", "Tizen OS");
  res.send("Event_15 emitted");
});

// Event 16
app.get("/emit-event_16", (req, res) => {
  io.emit("my-event_16", "Tizen OS");
  res.send("Event_16 emitted");
});

// Event 17
app.get("/emit-event_17", (req, res) => {
  io.emit("my-event_17", "Tizen OS");
  res.send("Event_17 emitted");
});

// Event 18
app.get("/emit-event_18", (req, res) => {
  io.emit("my-event_18", "Tizen OS");
  res.send("Event_18 emitted");
});

// Event 19
app.get("/emit-event_19", (req, res) => {
  io.emit("my-event_19", "Tizen OS");
  res.send("Event_19 emitted");
});

// Event 20
app.get("/emit-event_20", (req, res) => {
  io.emit("my-event_20", "Tizen OS");
  res.send("Event_20 emitted");
});

// Event 21
app.get("/emit-event_21", (req, res) => {
  io.emit("my-event_21", "Tizen OS");
  res.send("Event_21 emitted");
});

// Event 22
app.get("/emit-event_22", (req, res) => {
  io.emit("my-event_22", "Tizen OS");
  res.send("Event_22 emitted");
});

// Event 23
app.get("/emit-event_23", (req, res) => {
  io.emit("my-event_23", "Tizen OS");
  res.send("Event_23 emitted");
});

// Event 24
app.get("/emit-event_24", (req, res) => {
  io.emit("my-event_24", "Tizen OS");
  res.send("Event_24 emitted");
});

// Event 25
app.get("/emit-event_25", (req, res) => {
  io.emit("my-event_25", "Tizen OS");
  res.send("Event_25 emitted");
});

// Event 26
app.get("/emit-event_26", (req, res) => {
  io.emit("my-event_26", "Tizen OS");
  res.send("Event_26 emitted");
});

// Event 27
app.get("/emit-event_27", (req, res) => {
  io.emit("my-event_27", "Tizen OS");
  res.send("Event_27 emitted");
});

// Event 28
app.get("/emit-event_28", (req, res) => {
  io.emit("my-event_28", "Tizen OS");
  res.send("Event_28 emitted");
});

// Event 29
app.get("/emit-event_29", (req, res) => {
  io.emit("my-event_29", "Tizen OS");
  res.send("Event_29 emitted");
});

// Event 30
app.get("/emit-event_30", (req, res) => {
  io.emit("my-event_30", "Tizen OS");
  res.send("Event_30 emitted");
});

// Event 31
app.get("/emit-event_31", (req, res) => {
  io.emit("my-event_31", "Tizen OS");
  res.send("Event_31 emitted");
});

// Event 32
app.get("/emit-event_32", (req, res) => {
  io.emit("my-event_32", "Tizen OS");
  res.send("Event_32 emitted");
});

// Event 33
app.get("/emit-event_33", (req, res) => {
  io.emit("my-event_33", "Tizen OS");
  res.send("Event_33 emitted");
});

// Event 34
app.get("/emit-event_34", (req, res) => {
  io.emit("my-event_34", "Tizen OS");
  res.send("Event_34 emitted");
});

// Event 35
app.get("/emit-event_35", (req, res) => {
  io.emit("my-event_35", "Tizen OS");
  res.send("Event_35 emitted");
});

// Event 36
app.get("/emit-event_36", (req, res) => {
  io.emit("my-event_36", "Tizen OS");
  res.send("Event_36 emitted");
});

// Event 37
app.get("/emit-event_37", (req, res) => {
  io.emit("my-event_37", "Tizen OS");
  res.send("Event_37 emitted");
});

// Event 38
app.get("/emit-event_38", (req, res) => {
  io.emit("my-event_38", "Tizen OS");
  res.send("Event_38 emitted");
});

// Event 39
app.get("/emit-event_39", (req, res) => {
  io.emit("my-event_39", "Tizen OS");
  res.send("Event_39 emitted");
});

// Event 40
app.get("/emit-event_40", (req, res) => {
  io.emit("my-event_40", "Tizen OS");
  res.send("Event_40 emitted");
});

// Event 41
app.get("/emit-event_41", (req, res) => {
  io.emit("my-event_41", "Tizen OS");
  res.send("Event_41 emitted");
});

// Event 42
app.get("/emit-event_42", (req, res) => {
  io.emit("my-event_42", "Tizen OS");
  res.send("Event_42 emitted");
});

// Event 43
app.get("/emit-event_43", (req, res) => {
  io.emit("my-event_43", "Tizen OS");
  res.send("Event_43 emitted");
});

// Event 44
app.get("/emit-event_44", (req, res) => {
  io.emit("my-event_44", "Tizen OS");
  res.send("Event_44 emitted");
});

// Event 45
app.get("/emit-event_45", (req, res) => {
  io.emit("my-event_45", "Tizen OS");
  res.send("Event_45 emitted");
});

// Event 46
app.get("/emit-event_46", (req, res) => {
  io.emit("my-event_46", "Tizen OS");
  res.send("Event_46 emitted");
});

// Event 47
app.get("/emit-event_47", (req, res) => {
  io.emit("my-event_47", "Tizen OS");
  res.send("Event_47 emitted");
});

// Event 48
app.get("/emit-event_48", (req, res) => {
  io.emit("my-event_48", "Tizen OS");
  res.send("Event_48 emitted");
});

// Event 49
app.get("/emit-event_49", (req, res) => {
  io.emit("my-event_49", "Tizen OS");
  res.send("Event_49 emitted");
});

// Event 50
app.get("/emit-event_50", (req, res) => {
  io.emit("my-event_50", "Tizen OS");
  res.send("Event_50 emitted");
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
