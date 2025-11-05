/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("status_history", (table) => {
    table.increments("id").primary();
    table.integer("complaint_id").unsigned().references("id").inTable("complaints").onDelete("CASCADE");
    table.string("status").notNullable();
    table.string("department");
    table.timestamp("date").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("status_history");
};
