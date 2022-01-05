const express = require("express");
const playlistController = require("../controller/playlist.controller");

const router = express.Router();

router.get("/bychannelId", playlistController.getPlaylist);
router.get("/:id", playlistController.getPlaylistItem);

module.exports = router;
