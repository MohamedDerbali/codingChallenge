import * as mysql from "mysql2";
// import * as dotenv from "dotenv";
// dotenv.config();

export const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  port: 3306,
  database: "codingGame",
});
