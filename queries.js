// const configuration = require('./knexfile')[process.env.DATABASE_URL];
// const database = require('knex')(configuration);
// const environment = process.env.NODE_ENV || 'development';
require("dotenv").config()
const knexConfig = require('./knexfile')[process.env.NODE_ENV || "development"];
const database = require('knex')(knexConfig);

module.exports = {

  getAllAlbums() {
    // console.log("HERE IS THE DATABASEEEEEEEEEEEEEEEEEEE",database)
    // console.log("!!!!!!!!!!!!!!!!!!!database('album')", database('album').select('*'))
    return database('album').select()
  },

  getSingleAlbum(albumId) {
    return database('album_details').where("id", albumId).select()
  },

  addReview(review) {
    return database("reviews").insert(review, "id")
  },

  getReviews() {
    return database('reviews');
  },

  deleteReview(reviewId) {
    return database('reviews').where('id', reviewId).del()
  }
}