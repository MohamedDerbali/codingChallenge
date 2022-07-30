"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
exports.db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: "",
    port: 3306,
    database: process.env.DB_NAME,
});
