const express = require("express");
const videoController = require("../controller/video.controller");

const router = express.Router();

router.get("/list", videoController.getVideoList);
router.get("/detailById/:id", videoController.getVideoDetail);

module.exports = router;
