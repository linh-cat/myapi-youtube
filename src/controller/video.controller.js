const axios = require("axios");
const apiInstance = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

const getVideoList = async (req, res) => {
  try {
    const maxResult = req.query.max_results || 1;
    const part_snippet = req.query.snippet || "snippet";
    // const part_statistics = req.query.statistics || "";

    const data = await axios.get(
      `${apiInstance}/videos?part=${part_snippet}&maxResults=${maxResult}&chart=mostPopular&key=${apiKey}`
    );
    return res.status(200).json(data.data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getVideoDetail = async (req, res) => {
  try {
    const videoId = req.params.id;
    const part_snippet = req.query.snippet;
    const part_statistics = req.query.statistics;

    console.log(part_snippet);

    const data = await axios.get(
      `${apiInstance}/videos?part=${part_snippet}&part=${part_statistics}&id=${videoId}&key=${apiKey}`
    );

    return res.status(200).json(data.data.items);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getVideoList,
  getVideoDetail,
};
