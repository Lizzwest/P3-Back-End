const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Game schema
let GameSchema = new mongoose.Schema({
    name: String,
    faved: [userId],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    screenshot: String,
    description: String,
    cohort: String,
    gameUrl: String
})

// User schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  favesGames: [GameSchema]
});

module.exports = User = mongoose.model('User', UserSchema);