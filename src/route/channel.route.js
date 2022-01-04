const express = require("express");
const channelController = require("../controller/channel.controller");

const router = express.Router();

router.get("/:id", channelController.getChannelById);

module.exports = router;
