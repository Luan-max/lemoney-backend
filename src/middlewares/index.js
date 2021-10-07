const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = async (request, reply, next) => {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return reply.code(401).send({ error: "No token provied" });
    }

    const parts = authHeader.split(" ");

    if (!parts.length === 2) {
      return reply.code(401).send({ error: "Token Error" });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      return reply.code(401).send({ error: "Token mal foramado" });
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
      if (err) {
        return reply.code(401).send({ error: "Token Invalido" });
      }

      request.advertiserId = decoded.id;
      next();
    });
  } catch (error) {}
};
