const axios = require("axios");
const apiInstance = process.env.BASE_URL;
const apiKey = process.env.API_KEY;

const getPlaylist = async (req, res) => {
  try {
    const part = req.query.part || "snippet";
    const maxResult = req.query.max_results || 10;
    const channelId = req.query.channel_id;

    const data = await axios.get(
      `${apiInstance}/playlists?part=${part}&channelId=${channelId}&maxResults=${maxResult}&key=${apiKey}`
    );
    return res.status(200).json(data.data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getPlaylistItem = async (req, res) => {
  try {
    const part = req.query.part || "snippet";
    const maxResult = req.query.max_results || 10;
    const playlist_id = req.params.id;
    const data = await axios.get(
      `${apiInstance}/playlistItems?part=${part}&maxResults=${maxResult}&playlistId=${playlist_id}&key=${apiKey}`
    );

    return res.status(200).json(data.data);
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = {
  getPlaylist,
  getPlaylistItem,
};
