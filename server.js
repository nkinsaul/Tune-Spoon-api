// import albums from './data/albums'
const albums = require('./data/albums')
const albumDetails = require('./data/albumDetails')
const userData = require('./data/userData')

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.locals.favorites = []

app.get('/albums', (req, res) => {
  res.send(albums)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});

app.get('/album/:albumId', (req, res) => {
  const albumId = req.params.albumId
  const album = albumDetails.find(album => album.id.toString() === albumId)

  if (!album) {
    return res.sendStatus(404)
  }
  res.status(200).json(album)
})

app.get('/favorites', (req, res) => {
  const favorites = app.locals.favorites
  res.json({favorites})
})

app.post('/user', (req, res) => {

})


// first endpoint: id, album title, artist, image

// second endpoint: id, album title, artist, track list, information....