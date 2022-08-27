const axios = require("axios");

let timestamp = new Date().toISOString().split(".")[0].replace(/[^\d]/gi, "");
let password = new Buffer.from(
  `${process.env.SHORT_CODE}${process.env.PASS_KEY}${timestamp}`
).toString("base64");

exports.lipaNaMpesaOnline = async (req, res) => {
  let payload = {
    BusinessShortCode: process.env.SHORT_CODE,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: 1,
    PartyA: 254110494133,
    PartyB: process.env.SHORT_CODE,
    PhoneNumber: 254110494133,
    CallBackURL: "https://mydomain.com/pat",
    AccountReference: "George STK",
    TransactionDesc: "Test",
  };

  try {
    let { data } = await axios.post(process.env.MPESA_URL, payload, {
      headers: {
        Authorization: `Bearer ${req.token}`,
      },
    });

    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
