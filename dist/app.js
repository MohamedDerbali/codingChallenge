"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const timeSlotRouter_1 = require("./routes/timeSlotRouter");
const employeesRouter_1 = require("./routes/employeesRouter");
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use("/timeSlot", timeSlotRouter_1.timeSlotRouter);
app.use("/employee", employeesRouter_1.employeeRouter);
app.listen(process.env.PORT || 3000, () => {
    console.log(`App is listening on ${process.env.PORT || 3000}`);
});
exports.default = app;
