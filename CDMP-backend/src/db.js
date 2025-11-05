const knex = require("knex");
const knexConfig = require("./knexfile");

// Use development environment from knexfile.js
const db = knex(knexConfig.development);

module.exports = db;
