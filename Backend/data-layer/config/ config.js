const config = {
    use_env_variable: 'DATABASE_URL',
    seederStorage: 'sequelize', // Keep track of executed seeds to avoid re-execution upon each deployment
    dialectOptions: {
      ssl:
        process.env.DATABASE_SSL === 'true'
          ? {
              require: true,
              rejectUnauthorized: false,
            }
          : null,
    },
  };
  
  module.exports = {
    development: config,
    production: config,
  };
  