module.exports = {
   type: "postgres",
   port: process.env.DATABASE_PORT,
   host: process.env.DATABASE_HOST,
   username: process.env.DATABASE_USERNAME,
   password: process.env.DATABASE_PASSWORD,
   database: process.env.DATABASE_NAME,
   synchronize: true,
   logging: false,
   ssl: { rejectUnauthorized: false },
   entities: ["src/entity/**/*.ts"],
   migrations: ["src/migration/**/*.ts"],
   subscribers: ["src/subscriber/**/*.ts"],
   cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
   }
   // etc
}

