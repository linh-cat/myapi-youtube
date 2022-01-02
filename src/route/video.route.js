const express = require("express");
const videoController = require("../controller/video.controller");

const router = express.Router();

router.get("/list", videoController.getVideoList);

module.exports = router;
