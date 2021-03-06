const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  address: { type: String, required: true },
  contact: { type: Number, required: true },
  email: { type: String, required: true },
  
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;