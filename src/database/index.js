const moongose = require("mongoose");
const environment = require("../shared/environments");

exports.connect = async () => {
  try {
    await moongose.connect(environment.mongodb.URL);
  } catch (error) {
    throw new Error(`Error in connection with database ${error}`);
  }
};
