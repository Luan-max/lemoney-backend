const moment = require("moment");

module.exports = (offer) => {
  offer["active"] =
    offer.end_at >= moment().format("YYYY-MM-DDHH:mm:ss") && offer.active;

  return offer;
};
