const Fastify = require("fastify");
const routes = require("./routes/index");
const database = require("./database/index");

class Server {
  constructor() {
    this.fastify = Fastify({ logger: true });
    this.database();
    this.routes();
  }
  routes() {
    this.fastify.register(routes);
  }
  async database() {
    await database.connect();
    console.log("Connect with database");
  }
}

module.exports = new Server().fastify;
