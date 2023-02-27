require("dotenv").config()
const knexConfig = require('./knexfile')[process.env.NODE_ENV || "development"];
const database = require('knex')(knexConfig);

module.exports = {

  getAllAlbums() {
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