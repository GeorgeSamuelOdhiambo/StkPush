const axios = require("axios");

module.exports = async (req, res, next) => {
  let consumer_key = "1PaqP1kVNEyZYQVTGfzKZGAcu6f5a9or";
  let consumer_secret = "VNBrw0iKDtt2CV5T";
  let url =
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

  //form a buffer of the consumer key and secret
  let buffer = new Buffer.from(consumer_key + ":" + consumer_secret);
  let auth = `Basic ${buffer.toString("base64")}`;

  try {
    let { data } = await axios.get(url, {
      headers: {
        Authorization: auth,
      },
    });

    req.token = data.access_token;
    next();
  } catch (err) {
    res.send({
      message: err
    });
  }
};

// module.exports = async (req,res) => {
//   try {
//     let checkRequest = ''
//   } catch (error) {
    
//   }
// }
