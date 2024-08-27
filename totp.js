var speakeasy = require("speakeasy");

module.exports = {
  generate: (req, res) => {
    // Generate a secret key.
    var secret = speakeasy.generateSecret({ length: 20 });
    // Access using secret.ascii, secret.hex, or secret.base32.
    return res.send({"send": secret});
  },
  verify: (req, res) => {
    // Generate a secret key.
    var secret = speakeasy.generateSecret({ length: 20 });
    // Access using secret.ascii, secret.hex, or secret.base32.
    return res.send({"send": secret});
  },
};
