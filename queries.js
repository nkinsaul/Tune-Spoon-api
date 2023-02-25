const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])

module.exports = {

    getAllAlbums() {
      return knex('album')
      .select({
        id: 'id',
        title: 'title',
        artist: 'artist',
        image: 'image'
      })
    }  
}