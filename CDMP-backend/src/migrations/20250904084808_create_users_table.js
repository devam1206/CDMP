/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("username").unique().notNullable();
    table.string("display_name").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("avatar_uri");
    table.integer("points").defaultTo(0);
    table.integer("rank").defaultTo(0);
    table.integer("submissions_count").defaultTo(0);
    table.text("shipping_address");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
