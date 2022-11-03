import dotenv from "dotenv";
dotenv.config();

const config = {
  environment: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 3000,
  db_hostname: process.env.DATABASE_HOSTNAME || "localhost",
  db_port: process.env.DATABASE_PORT || 27017,
  db_username: process.env.DATABASE_USERNAME || "user_estoque",
  db_password: process.env.DATABASE_PASSWORD || "pass_estoque",
  db_database: process.env.DATABASE_DATABASE || "database",
};

export default config;
