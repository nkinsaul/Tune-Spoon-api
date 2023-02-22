// import albums from './data/albums'
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


app.get('/albums/reviews/:id', (req, res) => {
   const { id } = req.params
   const { reviews } = app.locals
   let reviewsId = reviews.find(review => review.id == id);
   

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


// For testing purposes only
app.get('/reviews/:albumId/:userId/:reviewId', (req,res) => {
  let { albumId, userId, reviewId } = req.params

  const albumToAccess = app.locals.reviews.find(album => album.albumID == albumId)
  if (!albumToAccess) {
    return res.sendStatus(404).json({
      message: `No albums found with an id of ${albumId}`
    })
  }
  const reviewToDelete = albumToAccess.reviews.find(reviews => (reviews.reviewID == reviewId) && (reviews.userID == userId))
  
  if (!reviewToDelete) {
    return res.sendStatus(404).json({
      message: `No review found with a reviewId of ${reviewId} and userId ${userId}`
    })
  }
  
  res.json(reviewToDelete)
})

app.delete('/reviews/:albumId/:userId/:reviewId', (req,res) => {
  let { albumId, userId, reviewId } = req.params

  const albumToAccess = app.locals.reviews.find(album => album.albumID == albumId)
  if (!albumToAccess) {
    return res.sendStatus(404).json({
      message: `No albums found with an id of ${albumId}`
    })
  }

  const reviewToDelete = albumToAccess.reviews.find(reviews => (reviews.reviewID == reviewId) && (reviews.userID == userId))

  if (!reviewToDelete) {
    return res.sendStatus(404).json({
      message: `No review found with a reviewId of ${reviewId} and userId ${userId}`
    })
  }

  let indexOfAlbum = app.locals.reviews.findIndex(album => album.albumID ==albumId)
  app.locals.reviews[indexOfAlbum].reviews = app.locals.reviews[indexOfAlbum].reviews.filter(review => {
    if ((review.reviewID != reviewId) && review.userID != userId){
      return true
    }
  })
  
  res.json(reviewToDelete)
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
    fs.writeFile('./data/userData.json',JSON.stringify(userData), error => {
      if(error) {
        console.error(err)
      }
      res.status(201).json({ id })
    })
  } else if(userData.favoriteAlbums.includes(id)){
    res.send('This album is already favorited.')
  } else {
    res.send('This album does not exist.')
  }
})


