// const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// const userModel = new mongoose.model("user", userSchema);

// var Schema = mongoose.Schema;
// var UserDetail = new Schema(
//   {
//     username: String,
//     password: String,
//   },
//   {
//     collection: "userInfo",
//   }
// );

// module.exports = userModel;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  //insert your other key of collection
});

module.exports = mongoose.model("userModel", UserSchema);
