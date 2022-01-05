const express = require("express");
const app = express();
const cors = require("cors");

// config
require("dotenv").config();
app.use(
  cors({
    origin: "*",
  })
);

const PORT = process.env.PORT || 3000;

// define route
const videoRoute = require("./src/route/video.route");
const channelRoute = require("./src/route/channel.route");
const playlistRoute = require("./src/route/playlist.route");

app.get("/", (req, res) => {
  res.send("Server youtube is running");
});

app.use("/video", videoRoute);
app.use("/channel", channelRoute);
app.use("/playlist", playlistRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
