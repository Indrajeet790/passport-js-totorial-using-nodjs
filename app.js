const { hashSync } = require("bcrypt");
const express = require("express");
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo");
const port = 8500;

// require mongoose
const db = require("./config/mongoose");

// import schema
const userModel = require("./models/database");

// using ejs
app.set("view engine", "ejs");

// use middleware for parse data from body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use cookies-parser-middleware
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/passport_js",
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

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
  let user = new userModel({
    username: req.body.username,
    password: hashSync(req.body.password, 16),
  });
  // use save method and console
  user.save().then((user) => console.log(user));

  resp.send({ success: true });
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
