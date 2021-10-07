require("dotenv").config();
const fastify = require("./src/index");

fastify.listen(process.env.PORT || 3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
