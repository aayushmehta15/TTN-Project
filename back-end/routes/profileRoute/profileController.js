const profileService = require("./profileService");

const getAllFeeds = async (req, res) => {
    try {
        let response = await profileService.getAllFeeds(req.userData);
        res.send(response);
    } catch (err) {
        res.send(err);
    }
};

module.exports = { getAllFeeds };
