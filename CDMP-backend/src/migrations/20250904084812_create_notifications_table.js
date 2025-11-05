/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("notifications", (table) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE");
    table.string("title").notNullable();
    table.text("message");
    table.string("type").defaultTo("info"); // info, success, warning
    table.integer("complaint_id").unsigned().references("id").inTable("complaints").onDelete("SET NULL");
    table.timestamp("date").defaultTo(knex.fn.now());
    table.boolean("read").defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("notifications");
};
