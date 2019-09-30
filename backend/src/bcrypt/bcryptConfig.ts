const crypt = require('bcrypt');
module.exports = {
  crypt:crypt,
  salt:crypt.genSaltSync(10)
};