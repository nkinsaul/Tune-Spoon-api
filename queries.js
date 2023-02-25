const knexConfig = require('./knexfile');
const database = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

module.exports = {

  getAllAlbums() {
    return database('album')
    .select({
      id: 'id',
      title: 'title',
      artist: 'artist',
      image: 'image'
    })
  },

  getSingleAlbum(req) {
    const albumId = req.params.albumId;
    return database('album_details').where("id", albumId).select()
  }
}