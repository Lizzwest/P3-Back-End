const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Game schema
let gameSchema = new mongoose.Schema({
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
const userSchema = new Schema({
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
  favesGames: [gameSchema]
});

module.exports = User = mongoose.model('User', userSchema);