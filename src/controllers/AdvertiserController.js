const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Advertiser = require("../models/Advertiser");

function generateToken(params = {}) {
  return jwt.sign(params, require("../config/auth.json").secret, {
    expiresIn: 86400,
  });
}

exports.authenticate = async ({ req, reply }) => {
  const { email, password } = req.body;

  const advertiser = await Advertiser.findOne({ email }).select("+password");

  if (!advertiser) {
    return reply.code(400).send({ error: "Usuário não existe" });
  }

  if (!(await bcrypt.compare(password, advertiser.password))) {
    return reply.code(400).send({ error: "Senha Inválida" });
  }

  reply.code(200).send({
    token: generateToken({ id: advertiser.id }),
  });
};

exports.register = async ({ req, reply }) => {
  const { email } = req.body;

  try {
    if (await Advertiser.findOne({ email })) {
      return reply.code(400).send({ error: "Usúario já existe" });
    }

    const advertiser = await Advertiser.create(req.body);

    return reply.code(201).send({
      advertiser: {
        advertiser,
        token: generateToken({ id: advertiser.id }),
      },
    });
  } catch (err) {
    console.log(err);
    return reply.code(400).send({ error: "Registration failed" });
  }
};

exports.list = async ({ req, reply }) => {
  const advertisers = await Advertiser.find();

  return reply
    .code(200)
    .send({ Advertisers: advertisers, elements: advertisers.length });
};
