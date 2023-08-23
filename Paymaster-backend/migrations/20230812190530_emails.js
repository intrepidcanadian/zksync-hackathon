/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
   return knex.schema.createTable('emails', function (table) {
       table.increments('id').primary();
       table.string('email').notNullable();
   });
};

exports.down = function(knex) {
   return knex.schema.dropTable('emails');
};