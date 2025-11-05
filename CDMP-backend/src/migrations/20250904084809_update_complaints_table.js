/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable("complaints", (table) => {
    table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE");
    table.string("image_uri");
    table.string("category");
    table.integer("points").defaultTo(0);
    table.string("department");
    table.boolean("ai_categorized").defaultTo(false);
    table.timestamp("submitted_date").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable("complaints", (table) => {
    table.dropColumn("user_id");
    table.dropColumn("image_uri");
    table.dropColumn("category");
    table.dropColumn("points");
    table.dropColumn("department");
    table.dropColumn("ai_categorized");
    table.dropColumn("submitted_date");
    table.dropColumn("updated_at");
  });
};
