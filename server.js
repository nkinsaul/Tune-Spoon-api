// import albums from './data/albums'
const albums = require('./data/albums')
const albumDetails = require('./data/albumDetails')
const favorites = require('./data/userData')
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

app.use(express.json());



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

app.get('/user', (req, res) => {
  const userData = require('./data/userData.json')
  res.send(JSON.stringify(userData))
})

app.post('/user', (req, res) => {
  const album = req.body
  const { id }  = album
  const userData = require('./data/userData.json')

  for (let requiredParameter of ['id']) {
    if (!album[requiredParameter]) {
      res
        .status(422)
        .send({ error: `Expected format: { id: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  if((!userData.favoriteAlbums.includes(id)) && id <= albums.length) {
    userData.favoriteAlbums.push(id)
    res.status(201).json({ id })

  } else if(userData.favoriteAlbums.includes(id)){
    res.send('This album is already favorited.')
  } else {
    res.send('This album does not exist.')
  }
})


// first endpoint: id, album title, artist, image

// second endpoint: id, album title, artist, track list, information....