export const options = {
  username: process.env.DATABASE_USERNAME || "root",
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME || "nextjs-shadcnui-dashboard-db",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  dialect: "mysql",
  logging: process.env.NODE_ENV === "development" ? true : false,
  migrationStorageTableName: "migrations",
};

if (process.env.NODE_ENV === "production") {
  options.dialectOptions = {
    ssl: {
      rejectUnauthorized: true,
    },
  };
}

export default {
  development: options,
  test: options,
  production: options,
};
