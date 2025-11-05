/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("complaints", (table) => {
    table.increments("id").primary(); // auto-increment ID
    table.string("title").notNullable();
    table.text("description");
    table.string("status").defaultTo("open");
    table.string("location"); 
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("complaints");
};
