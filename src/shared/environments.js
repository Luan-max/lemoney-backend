require("dotenv").config();

module.exports = {
  mongodb: {
    URL: process.env.MONGO_URL,
  },
};
