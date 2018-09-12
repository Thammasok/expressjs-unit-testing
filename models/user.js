const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: String,
    lastname: String,
    age: Number,
    gender: String
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('user', userSchema);

module.exports = User;