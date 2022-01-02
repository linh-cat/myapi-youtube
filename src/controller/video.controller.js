const axios = require("axios");
const apiInstance = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

const getVideoList = async (req, res) => {
  try {
    const maxResult = req.query.max_results || 1;

    const data = await axios.get(
      `${apiInstance}/videos?part=snippet&maxResults=${maxResult}&chart=mostPopular&key=${apiKey}`
    );
    return res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getVideoList,
};
