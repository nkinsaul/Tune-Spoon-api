const knexConfig = require('./knexfile');
const database = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

module.exports = {

  getAllAlbums() {
    return database('album')
    .select()
  },

  getSingleAlbum(albumId) {
    return database('album_details').where("id", albumId).select()
  }
}