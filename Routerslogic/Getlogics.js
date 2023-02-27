const axios = require("axios");
const { mp } = require("../config");

let timestamp = new Date().toISOString().split(".")[0].replace(/[^\d]/gi, "");
let password = new Buffer.from(
  `${mp.SHORT_CODE}${mp.PASS_KEY}${timestamp}`
).toString("base64");

exports.lipaNaMpesaOnline = async (req, res) => {
  let phoneNumber = req.body.phoneNumber;
  let payload = {
    BusinessShortCode: mp.SHORT_CODE,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: req.body.amount,
    PartyA: phoneNumber,
    PartyB: mp.SHORT_CODE,
    PhoneNumber: phoneNumber,
    CallBackURL: mp.CALLBACK_URL,
    AccountReference: "George Samuel",
    TransactionDesc: "Test",
  };

  try {
    let { data } = await axios.post(mp.MPESA_URL, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.token}`,
      },
    });

    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
