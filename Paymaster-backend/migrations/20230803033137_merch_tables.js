/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('merchTables', function (table) {
        table.increments('id').primary();
        table.text('product').notNullable();
        table.text('productDescription').notNullable();
        table.text('productMaterial').notNullable();
        table.text('productName').notNullable();
        table.decimal('price', 10, 2).notNullable();
        table.string('image');
});
};

exports.down = function(knex) {
    return knex.schema.dropTable('merchTables');
};