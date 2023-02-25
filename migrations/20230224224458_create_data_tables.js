/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('album', table => {
    table.increments('id').primary();
    table.string('title')
    table.string('artist')
    table.string('image')
    table.timestamp(true, true);
  })
  .createTable('album_details', table => {
    table.increments('id').primary();
    table.string('title');
    table.string('artist');
    table.string('image');
    table.specificType('track_list', 'text ARRAY');
    table.integer('length');
    table.specificType('description', 'varchar');
    table.string('producer');
    table.string('release_date');
    table.specificType('genres', 'text ARRAY');
    table.timestamp(true, true);
  })
  .createTable('reviews', table => {
    table.increments('id').primary();
    table.integer('album_id');
    table.integer('user_id');
    table.specificType('review_text', 'varchar');
    table.timestamp(true, true);
  })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTable('album')
  .dropTable('album_details')
  .dropTable('reviews')
};