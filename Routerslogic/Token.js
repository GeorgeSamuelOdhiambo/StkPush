const axios = require("axios");

//generates access token each time a request is made
module.exports = async (req, res, next) => {
  let buffer = new Buffer.from(
    `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
  ).toString("base64");
  try {
    let { data } = await axios.get(process.env.TOKEN_URL, {
      headers: { Authorization: `Basic ${buffer}` },
    });
    req.token = data.access_token;
    next();
  } catch (err) {
    res.send({ message: "Access Token cant be generated" });
  }
};
