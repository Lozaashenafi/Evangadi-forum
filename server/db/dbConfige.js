import { createPool } from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const dbconnection = createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST || "localhost",
  password: process.env.PASSWORD,
  connectionLimit: 10,
});

// Named exports
export const query = (...args) => dbconnection.promise().query(...args);
export const execute = (...args) => dbconnection.promise().execute(...args);
