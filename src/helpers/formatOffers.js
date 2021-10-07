const moment = require("moment");

module.exports = ({ offer }) => {
  offer.start_at = moment(offer.start_at, "DD-MM-YYYY").format(
    "YYYY-MM-DD HH:mm:ss"
  );
  offer.end_at = moment(offer.end_at, "DD-MM-YYYY").format(
    "YYYY-MM-DD HH:mm:ss"
  );

  return offer;
};
