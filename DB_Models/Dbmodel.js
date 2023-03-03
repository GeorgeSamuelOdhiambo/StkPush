const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mpesachema = new Schema({
  Body: {
    stkCallback: {
      MerchantRequestID: {
        type: String,
        required: true,
      },
      CheckoutRequestID: {
        type: String,
        required: true,
      },
      ResultCode: {
        type: Number,
        required: true,
      },
      ResultDesc: {
        type: String,
        required: true,
      },
      CallbackMetadata: {
        Item: [
          {
            Name: String,
            Value: String,
          },
        ],
      },
    },
  },
});

module.exports = mongoose.model("DBMpesa", mpesachema);
