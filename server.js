
const albums = require('./data/albums')
const reviews = require('./data/reviews')
const albumDetails = require('./data/albumDetails')
const express = require('express');
const { request } = require('http');
const { response } = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.locals = {
  albums,
  reviews
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
   console.log('request', req.params);
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

app.get('/album/:albumId', (req,res) => {
  const albumId = req.params.albumId
  const album = albumDetails.find(album => album.id.toString() === albumId)

  if (!album) {
    return res.sendStatus(404)
  }
  res.status(200).json(album)
})

app.post('/album/review', (request, response) => {
  const id = Date.now()
  const { albumId, userName, review } = request.body

  

  response.status(200).json({id, userName, review})
})
