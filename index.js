const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// config
require("dotenv").config();
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// define route
const videoRoute = require("./src/route/video.route");

app.get("/", (req, res) => {
  res.send("Server youtube is running");
});

app.use("/video", videoRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
