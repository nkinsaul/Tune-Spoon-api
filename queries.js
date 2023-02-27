// const knexConfig = require('./knexfile');
// const database = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

module.exports = {

  getAllAlbums() {
    // console.log("HERE IS THE DATABASEEEEEEEEEEEEEEEEEEE",database)
    // console.log("!!!!!!!!!!!!!!!!!!!database('album')", database('album').select('*'))
    return database('album').select('*')
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