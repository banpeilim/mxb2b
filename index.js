// Importing required packages
const express = require("express");

// Creating an instance of the Express app
const app = express();

// Handling GET requests
app.get("/", (req, res) => {
  // Sending a response
  res.send("<h1>Hello, world!</h1>");
});

// Starting the server
app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
