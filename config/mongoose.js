const mongoose = require("mongoose");

// connection
mongoose.connect("mongodb://127.0.0.1:27017/passport_js").then(() => {
  console.log("database successfully connected");
});
