
const albums = require('./data/albums')
const reviews = require('./data/reviews')
const albumDetails = require('./data/albumDetails')
const express = require('express');
const { request } = require('http');
const { response } = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


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

app.get('/album/:albumId', (req,res) => {
  const albumId = req.params.albumId
  const album = albumDetails.find(album => album.id.toString() === albumId)

  if (!album) {
    return res.sendStatus(404)
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
  
  const { albumID } = reviewBody
   
  const album = app.locals.reviews.find(album => 
    albumID === album.albumID.toString()
  )
  
  album.reviews.push({reviewID, ...reviewBody})
  
  response.status(201).json({reviewID, ...reviewBody})
})
