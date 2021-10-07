const moment = require("moment");

module.exports = (offer) => {
  offer["enabled"] =
    offer.end_at >= moment().format("YYYY-MM-DDHH:mm:ss") && offer.enabled;

  return offer;
};
