/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('raptorsticketinfo', function (table) {
        table.increments('id').primary();
        table.string('eventname', 100).notNullable();
        table.string('artist', 100).notNullable();
        table.string('seat').notNullable();
        table.string('location', 255).notNullable();
        table.timestamp('eventtimestart');
        table.timestamp('eventtimeend');
        table.text('eventinformation').notNullable();
        table.text('image');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      });
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
    return knex.schema.dropTable('raptorsticketinfo');
  };