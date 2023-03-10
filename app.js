const express = require("express");
const app = express();
const port = 8500;

// This route for login page
app.get("/login", (req, resp) => {
  resp.send("login get");
});
// This route for login page
app.get("/register", (req, resp) => {
  resp.send("Register get");
});

app.listen(port, (err) => {
  if (err) {
    console.log("server is not valid");
  } else {
    console.log(`server is running on port ${port}`);
  }
});
