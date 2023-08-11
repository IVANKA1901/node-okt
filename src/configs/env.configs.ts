require("dotenv").config();

const envConfig = {
  DB_HOST: process.env.DB_HOST,
  PORT: process.env.PORT || 3000,
};

module.exports = envConfig;
