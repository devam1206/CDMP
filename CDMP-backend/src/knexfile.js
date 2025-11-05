require('dotenv').config({ path: '../.env' });

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "localhost",
      user: process.env.DB_USER || "devuser",
      password: process.env.DB_PASSWORD || "devpass",
      database: process.env.DB_NAME || "community_monitor",
      port: process.env.DB_PORT || 5432
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }
};
