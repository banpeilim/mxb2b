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

server.listen(3000, () => {
  console.log("SERVER IS RUNNING");
});
