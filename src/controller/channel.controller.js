const axios = require("axios");
const apiInstance = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

const getChannelById = async (req, res) => {
  try {
    const channelId = req.params.id;
    const data = await axios.get(
      `${apiInstance}/channels?part=snippet&id=${channelId}&key=${apiKey}`
    );
    return res.status(200).json(data.data);
  } catch (e) {
    return res.status(500).json(e);
  }
};
module.exports = {
  getChannelById,
};
