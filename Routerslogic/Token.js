const axios = require("axios");
const { mp } = require("../config");

//generates access token each time a request is made
module.exports = async (req, res, next) => {
  let buffer = new Buffer.from(
    `${mp.CONSUMER_KEY}:${mp.CONSUMER_SECRET}`
  ).toString("base64");
  try {
    let { data } = await axios.get(mp.TOKEN_URL, {
      headers: { Authorization: `Basic ${buffer}` },
    });
    req.token = data.access_token;
    next();
  } catch (err) {
    res.send({ message: "Access Token cant be generated" });
  }
};
