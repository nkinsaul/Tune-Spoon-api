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
  const { id } = req.body 
  const userData = require('./data/userData.json')

  console.log(userData)
  if(!userData.favoriteAlbums.includes(id)) {
    userData.favoriteAlbums.push(id)
    fs.writeFile('./data/userData.json',JSON.stringify(userData), error => {
      if(error) {
        console.error(err)
      }
    })
  }

  res.status(201).json({ id })
})


// first endpoint: id, album title, artist, image

// second endpoint: id, album title, artist, track list, information....