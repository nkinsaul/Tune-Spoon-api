
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const queries = require('./queries')

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});

app.get('/albums', (request, response) => {
  queries.getAllAlbums()
  .then((albums) => {
    return response.status(200).json(albums)
  })
  .catch((error) => {
    response.status(500).json({error});
  })
});

app.get('/album/:albumId', (request, response) => {
  const albumId = request.params.albumId;
  queries.getSingleAlbum(albumId)
  .then((album) => {
    if (!albumId) {
      return response.sendStatus(404).json({
        message: `No albums found with an id of ${albumId}`
      })
    }
    return response.status(200).json(album)
  })
  .catch((error) => {
    response.status(500).json({error});
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
  .then(data => response.status(200).json(data))
  .catch((error) => {
    response.status(500).json({error})
  })
})


  