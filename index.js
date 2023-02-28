// Importing required packages
const express = require("express");

// Creating an instance of the Express app
const app = express();

// Handling GET requests to the root URL
app.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>");
});

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
