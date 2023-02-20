// import albums from './data/albums'
const albums = require('./data/albums')
const reviews = require('./data/reviews')

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



// first endpoint: id, album title, artist, image

// second endpoint: id, album title, artist, track list, information....