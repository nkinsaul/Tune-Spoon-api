const albums = require('../data/albums')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('album').del()
    .then(function () {
      // Inserts seed entries
      return knex('album').insert(albums);
    });
};

// .createTable('album', table => {
//   table.increments('id').primary();
//   table.string('title')
//   table.string('artist')
//   table.string('image')
//   table.timestamp(true, true);