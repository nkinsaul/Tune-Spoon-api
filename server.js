// import albums from './data/albums'
const albums = require('./data/albums')

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/albums', (req, res) => {
  res.send(albums)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});



// first endpoint: id, album title, artist, image

// second endpoint: id, album title, artist, track list, information....