const axios = require("axios");
const { mp } = require("../config");
const DBMpesa = require("../DB_Models/Dbmodel");

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

exports.callmeback = async (req, res) => {
  try {
    let ResBody = req.body.Body.stkCallback;
    if (ResBody.ResultCode == 0) {
      console.log(req.body);
      const mpesadb = new DBMpesa(req.body);

      const result = await mpesadb.save();
      console.log(result);
      res.send(result);
    } else {
      console.log(ResBody.ResultDesc);
      const mpesadb = new DBMpesa(req.body);

      const result = await mpesadb.save();
      console.log(result);
      res.send(result);
    }
  } catch (error) {
    res.send(error);
  }
};
