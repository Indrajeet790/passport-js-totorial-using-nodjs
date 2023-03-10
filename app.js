const express = require("express");
const app = express();
const port = 8500;

// using ejs
app.set("view engine", "ejs");

// This route for login page
app.get("/login", (req, resp) => {
  resp.render("login");
});
// This route for login page
app.get("/register", (req, resp) => {
  resp.render("register");
});
// This route for post login data
app.post("/login", (req, resp) => {
  resp.send("login post");
});
// this is create post route for register
app.post("/register", (req, resp) => {
  resp.send("Register post");
});
//  This route for logout
app.get("/logout", (req, resp) => {
  resp.send("Logout get");
});
// This  route for protected
app.get("/protected", (req, resp) => {
  resp.send("protected get");
});

app.listen(port, (err) => {
  if (err) {
    console.log("server is not valid");
  } else {
    console.log(`server is running on port ${port}`);
  }
});
