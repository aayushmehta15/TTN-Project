const profileService = require("./profileService");

const getAllFeeds = async (req, res) => {
    let response = await profileService.getAllFeeds(req.userData);
    res.send(response);
};

module.exports = { getAllFeeds };
