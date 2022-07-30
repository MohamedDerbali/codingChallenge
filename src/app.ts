import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {timeSlotRouter} from "./routes/timeSlotRouter";
import {employeeRouter} from "./routes/employeesRouter";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/timeSlot", timeSlotRouter);
app.use("/employee", employeeRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is listening on ${process.env.PORT || 3000}`);
});
