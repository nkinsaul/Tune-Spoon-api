/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgres',
    connection: {
      port: 5432,
      database: 'tune_spoon',
      user:     'postgres',
      password: 'daisy'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds',
    },
    useNullAsDefault: true
  },
  production: {
    client: 'postgres',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }, 
    }
    ,
    migrations: {
      directory: './migrations'
    },
    useNullAsDefault: true
  }

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'tunespoon',
  //     user:     'postgres',
  //     password: 'daisy'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
