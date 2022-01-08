const axios = require("axios");
const apiInstance = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

const getChannelById = async (req, res) => {
  try {
    const channelId = req.params.id;
    const snippet = req.query.snippet || "snippet";
    const statistics = req.query.statistics || "statistics";

    const data = await axios.get(
      `${apiInstance}/channels?part=${snippet}&part=${statistics}&id=${channelId}&key=${apiKey}`
    );
    return res.status(200).json(data.data);
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = {
  getChannelById,
};
