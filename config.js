const env = process.env.NODE_ENV; // 'dev' or 'prod'

const dev = {
  apps: {
    PORT: parseInt(process.env.DEV_APP_PORT) || 8080,
  },
  // database info
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: parseInt(process.env.DEV_DB_PORT) || 27017,
    name: process.env.DEV_DB_NAME || "db",
  },
  // mpesa info
  mp: {
    TOKEN_URL: process.env.DEV_TOKEN_URL,
    CONSUMER_KEY: process.env.DEV_CONSUMER_KEY,
    CONSUMER_SECRET: process.env.DEV_CONSUMER_SECRET,
    SHORT_CODE: process.env.DEV_SHORT_CODE,
    CALLBACK_URL: process.env.DEV_CALLBACK_URL,
    MPESA_URL: process.env.DEV_MPESA_URL,
    PASS_KEY: process.env.DEV_PASS_KEY,
  },
  // stripe info
  spt: {},
};

const prod = {
  apps: {
    port: parseInt(process.env.TEST_APP_PORT) || 8080,
  },
  db: {
    host: process.env.TEST_DB_HOST || "localhost",
    port: parseInt(process.env.TEST_DB_PORT) || 27017,
    name: process.env.TEST_DB_NAME || "test",
  },
  mp: {
    TOKEN_URL: process.env.PROD_TOKEN_URL,
    CONSUMER_KEY: process.env.PROD_CONSUMER_KEY,
    CONSUMER_SECRET: process.env.PROD_CONSUMER_SECRET,
    SHORT_CODE: process.env.PROD_SHORT_CODE,
    CALLBACK_URL: process.env.PROD_CALLBACK_URL,
    MPESA_URL: process.env.PROD_MPESA_URL,
    PASS_KEY: process.env.PROD_PASS_KEY,
  },
};

const config = {
  dev,
  prod,
};

module.exports = config[env];
