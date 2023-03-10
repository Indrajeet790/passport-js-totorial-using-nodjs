const express = require("express");
const app = express();
const port = 8500;

app.listen(port, (err) => {
  if (err) {
    console.log("server is not valid");
  } else {
    console.log(`server is running on port ${port}`);
  }
});
