const albums = require('../data/albums')
const albumDetails = require('../data/albumDetails')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('album').del()
    .then(function () {
      // Inserts seed entries
      return knex('album').insert(albums);
    })
    .then(function() {
      return knex('album_details').del()
    })
    .then(function() {
      return knex('album_details').insert(albumDetails)
    })
};
