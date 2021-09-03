const axios = require("axios");
const unirest = require("unirest");

let timestamp = new Date().toISOString().split(".")[0].replace(/[^\d]/gi, "");
let short_code = 174379;
let passkey =
  "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
let password = new Buffer.from(`${short_code}${passkey}${timestamp}`).toString(
  "base64"
);

exports.getslash = async (req, res, next) => {
  try {
    res.send("Samuel");
  } catch (error) {}
};

exports.lipaNaMpesaOnline = async (req, res) => {
  let token = req.token;
  let auth = `Bearer ${token}`;
  let url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  let amount = req.body.amount; //you can enter any amount
  let partyA = req.body.phonenumber; //should follow the format:2547xxxxxxxx

  try {
    let { data } = await axios
      .post(
        url,
        {
          BusinessShortCode: short_code,
          Password: password,
          Timestamp: timestamp,
          TransactionType: "CustomerPayBillOnline",
          Amount: amount,
          PartyA: partyA,
          PartyB: short_code,
          PhoneNumber: partyA,
          CallBackURL: "http://fb1f-154-159-238-89.ngrok.io/callback",
          AccountReference: "Lipa Fee",
          TransactionDesc: "Payment of X",
        },
        {
          headers: {
            Authorization: auth,
          },
        }
      )
      .catch(console.log);

    res.send({
      success: true,
      message: data,
    });
  } catch (err) {
    res.send({
      success: false,
      message: err,
    });
  }
};

exports.mpesaresult = async (req, res) => {
  try {
    let result = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpushquery/v1/query",
      {
        BusinessShortCode: short_code,
        Password: password,
        Timestamp: timestamp,
        CheckoutRequestID: "ws_CO_020920211927071140",
      },
      {
        headers: {
          Authorization: `Bearer ${req.Token}`,
        },
      }
    );
  console.log(result);
    res.send({
      result
    })
    
  } catch (error) {
    res.send({
      error
    })
  }
}; 
