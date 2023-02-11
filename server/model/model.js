const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name must be provided'],
  },
  email: {
    type: String,
    required: [true, 'Email must be provided'],
    unique: true,
  },
  gender: String,
  status: String,
});

const Userdb = mongoose.model('userdb', schema);
module.exports = Userdb;
