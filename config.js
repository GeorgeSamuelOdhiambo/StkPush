const env = process.env.NODE_ENV; // 'dev' or 'prod'

const dev = {
  apps: {
    PORT: parseInt(process.env.DEV_APP_PORT) || 8080,
  },

  db: {
    DB_URL: process.env.DEV_MGDB,
  },

  mp: {
    TOKEN_URL: process.env.DEV_TOKEN_URL,
    CONSUMER_KEY: process.env.DEV_CONSUMER_KEY,
    CONSUMER_SECRET: process.env.DEV_CONSUMER_SECRET,
    SHORT_CODE: process.env.DEV_SHORT_CODE,
    CALLBACK_URL: process.env.DEV_CALLBACK_URL,
    MPESA_URL: process.env.DEV_MPESA_URL,
    PASS_KEY: process.env.DEV_PASS_KEY,
  },
};

const prod = {
  apps: {
    PORT: parseInt(process.env.DEV_APP_PORT) || 8080,
  },

  db: {
    DB_URL: process.env.DEV_MGDB,
  },

  mp: {
    TOKEN_URL: process.env.DEV_TOKEN_URL,
    CONSUMER_KEY: process.env.DEV_CONSUMER_KEY,
    CONSUMER_SECRET: process.env.DEV_CONSUMER_SECRET,
    SHORT_CODE: process.env.DEV_SHORT_CODE,
    CALLBACK_URL: process.env.DEV_CALLBACK_URL,
    MPESA_URL: process.env.DEV_MPESA_URL,
    PASS_KEY: process.env.DEV_PASS_KEY,
  },
};

const config = {
  dev,
  prod,
};

module.exports = config[env];
