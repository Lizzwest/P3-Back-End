require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const passport = require('passport');


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(passport.initialize());
require('./config/passport')(passport);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'You checking out my backend?! MY EYES ARE UP HERE!' });
});

app.listen(port, () => {
  console.log(`Scope that backend on port: ${port}`);
});