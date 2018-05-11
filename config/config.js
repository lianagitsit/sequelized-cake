require("dotenv").config();

module.exports = {
    "development": {
      "username": process.env.DB_USER_DEV,
      "password": process.env.DB_PASSWORD_DEV,
      "database": "cake_db",
      "host": process.env.DB_HOST_DEV,
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }
  