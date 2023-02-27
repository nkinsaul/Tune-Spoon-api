const knexConfig = require('./knexfile');
const database = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

module.exports = {

  getAllAlbums() {
    console.log("HERE IS THE DATABASEEEEEEEEEEEEEEEEEEE",database)
    return database('album')
    .select()
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