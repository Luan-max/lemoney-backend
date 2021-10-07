const Offers = require("../models/Offers");
const formatOffersFunction = require("../helpers/formatOffers");
const offersEnabledFunction = require("../helpers/enabledOffers");

exports.create = async ({ req, reply }) => {
  try {
    const formatOffers = formatOffersFunction({ offer: req.body });

    const offer = await Offers.create({
      ...formatOffers,
      advertiser: req.advertiserId,
    });

    reply.code(200).send({
      offer,
    });
  } catch (error) {
    throw new Error(`Error in creating offer ${error}`);
  }
};

exports.update = async ({ req, reply }) => {
  try {
    const { enabled } = req.body;

    const offer = await Offers.findByIdAndUpdate(
      req.params.offerId,
      {
        enabled,
      },
      { new: true }
    );

    reply.code(200).send({
      offer,
    });
  } catch (error) {
    throw new Error(`Error in update offer ${error}`);
  }
};

exports.list = async ({ req, reply }) => {
  const offers = await Offers.find();

  const formatOrders = await Promise.all(
    offers.map((offer) => {
      const offersformated = offersEnabledFunction(offer);

      return offersformated;
    })
  );

  const ordersEnabled = formatOrders.filter((enabled) => enabled.enabled);

  return reply
    .code(200)
    .send({ Offers: ordersEnabled, elements: offers.length });
};

exports.listOffersEnabledAndDisabled = async ({ req, reply }) => {
  const offers = await Offers.find();

  return reply.code(200).send({ Offers: offers, elements: offers.length });
};

exports.getById = async ({ req, reply }) => {
  const offer = await Offers.findById(req.params.offerId).populate(
    "advertiser"
  );

  if (!offer) {
    return reply.code(400).send({ error: "Oferta não existe" });
  }

  return reply.code(200).send({ Offer: offer });
};

exports.delete = async ({ req, reply }) => {
  try {
    await Offers.findByIdAndRemove(req.params.offerId);

    reply.code(200).send({
      message: "Offer deleted",
    });
  } catch (error) {
    throw new Error(`Error in delete offer ${error}`);
  }
};
