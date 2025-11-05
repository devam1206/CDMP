/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("prizes", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description");
    table.string("image_uri");
    table.integer("point_cost").notNullable();
    table.string("category");
    table.boolean("available").defaultTo(true);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("prizes");
};
