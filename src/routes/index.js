const AdvertiserController = require("../controllers/AdvertiserController");
const OffersController = require("../controllers/OffersController");
const middleware = require("../middlewares/index");

async function routes(fastify, options) {
  fastify.post("/login", async (request, reply) => {
    await AdvertiserController.authenticate({
      req: request,
      reply,
    });
  });

  fastify.post("/register", async (request, reply) => {
    await AdvertiserController.register({
      req: request,
      reply,
    });
  });

  fastify.get("/advertisers", async (request, reply) => {
    middleware(request, reply);
    await AdvertiserController.list({
      req: request,
      reply,
    });
  });

  fastify.post("/offers", async (request, reply) => {
    middleware(request, reply);
    await OffersController.create({
      req: request,
      reply,
    });
  });

  fastify.put("/offers/:offerId", async (request, reply) => {
    middleware(request, reply);
    await OffersController.update({
      req: request,
      reply,
    });
  });
  fastify.get("/offers/:offerId", async (request, reply) => {
    middleware(request, reply);
    await OffersController.getById({
      req: request,
      reply,
    });
  });

  fastify.get("/offers/all", async (request, reply) => {
    middleware(request, reply);
    await OffersController.listOffersEnabledAndDisabled({
      req: request,
      reply,
    });
  });

  fastify.get("/offers", async (request, reply) => {
    middleware(request, reply);
    await OffersController.list({
      req: request,
      reply,
    });
  });
}

module.exports = routes;
