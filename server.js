
const express = require('express');
const { request } = require('http');
const { response } = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');
const queries = require('./queries')

app.use(express.json());

// app.locals = {
//   albums,
//   reviews,
//   albumDetails
// }

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});

app.get('/albums', (req, res) => {
  queries.getAllAlbums()
  .then((albums) => {
    return res.json(albums)
  })
  .catch((error) => {
    console.log(error)
  })
});

app.get('/album/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  queries.getSingleAlbum(albumId)
  .then((album) => {
    if (!albumId) {
      return res.sendStatus(404).json({
        message: `No albums found with an id of ${albumId}`
      })
    }
    return res.status(200).json(album)
  })
  .catch((error) => {
    console.log(error.message);
  })
})

app.post('/albums/reviews', (request, response) => {
  const review = request.body;

  for(let requiredParameter of ['album_id', 'user_id', 'review_text']) {
    if(!review[requiredParameter]) {
      return response 
        .status(422)
        .send({error: `Expected format: {album_id: <num>, user_id: <num>, review_text: <str>}  You are missing ${requiredParameter} property.`})
    }
  }
  queries.addReview(review)
  .then(data => response.status(201).json(data))
  .catch 
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


 