const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const OffersSchema = new mongoose.Schema({
  advertiser_name: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  enabled: {
    type: Boolean,
    require: true,
    default: false,
  },
  premium: {
    type: Boolean,
    require: true,
    default: false,
  },
  advertiser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Advertiser",
    require: true,
  },
  start_at: {
    type: String,
    require: true,
  },
  end_at: {
    type: String,
    require: true,
  },
});

const Offers = mongoose.model("Offers", OffersSchema);
module.exports = Offers;
