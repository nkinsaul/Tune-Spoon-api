
const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV])
const albums = require('./data/albums')
const reviews = require('./data/reviews')
const albumDetails = require('./data/albumDetails')
const express = require('express');
const { request } = require('http');
const { response } = require('express');
const app = express();
const port = process.env.PORT || 3000;
const fs = require('fs');

app.use(express.json());

app.locals = {
  albums,
  reviews,
  albumDetails
}

app.get('/albums', (req, res) => {
  res.send(albums)
});

app.get('/albums/reviews', (req, res) => {
  const { reviews }  = app.locals
  res.status(200).json(reviews)
});

app.get('/albums/:id/reviews/', (req, res) => {
   const { id } = req.params
   const { reviews } = app.locals
   let reviewsId = reviews.find(review => review.albumID == id);
   

   if (!reviewsId) {
    return res.status(404).json({
      message: `No reviews found with an id of ${id}`
    });
  }
   res.status(200).json(reviewsId);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
});

app.get('/album/:albumId', (req, res) => {
  const albumId = req.params.albumId
  const album = albumDetails.find(album => album.id.toString() === albumId)

  if (!album) {
    return res.sendStatus(404).json({
      message: `No albums found with an id of ${id}`
    })
  }
  res.status(200).json(album)
})

app.post('/albums/reviews', (request, response) => {
  const reviewID = Date.now();
  const reviewBody = request.body;
  for(let requiredParameter of ['userName', 'albumID', 'review', 'userID']) {
    if(!reviewBody[requiredParameter]) {
      response
        .status(422).json()
        .send({error: `Expected format: { userName: <String>, albumID: <Number>, reviewText: <String>}.  You're missing a ${requiredParameter}.`})
    }
  }
  
  const { albumID, review, userID } = reviewBody
   
  const album = app.locals.reviews.find(album => 
    albumID === album.albumID.toString()
  )
  
  album.reviews.push({reviewID, review, userID})
  
  response.status(201).json({review, reviewID, userID})
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
 