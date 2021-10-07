const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const AdvertiserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

AdvertiserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

const Advertiser = mongoose.model("Advertiser", AdvertiserSchema);
module.exports = Advertiser;
