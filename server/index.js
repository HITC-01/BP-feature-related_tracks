require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');

const port = 3002;

app.use(cors());
app.use(bodyParser.json());
app.use('/songs/:songId', express.static(path.join(__dirname, '../client/dist')));

app.get('/related/songs/:songid/related', (req, res) => {
  const song = req.params.songid;
  db.getRelated(song, (err, results) => {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.send(Object.assign({}, results));
    }
  });
});

app.get('/related/songs/:songid/', (req, res) => {
  const song = req.params.songid;
  db.getSong(song, (err, results) => {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.send(Object.assign({}, results));
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
