import {TimeSlot} from "../types/timeSlot";
import {db} from "../utils/mysql.connector";
import {OkPacket, RowDataPacket} from "mysql2";
export const create = (timeSlot: TimeSlot, callback: Function) => {
  const queryString = "INSERT INTO timeSlot (time, description) VALUES (?, ?)";

  db.query(
      queryString,
      [timeSlot.time, timeSlot.description],
      (err, result) => {
        if (err) {
          callback(err);
        }

        const uid = (<OkPacket>result).insertId;
        callback(null, uid);
      },
  );
};
export const findAll = (callback: Function) => {
  const queryString = `
      SELECT *
      FROM timeSlot `;

  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    callback(null, rows);
  });
};
export const update = (timeSlot: TimeSlot, callback: Function) => {
  const queryString = "UPDATE timeSlot SET time=?, description=? WHERE uid=?";
  db.query(
      queryString,
      [timeSlot.time, timeSlot.description, timeSlot.uid],
      (err) => {
        if (err) {
          callback(err);
        }
        callback(null);
      },
  );
};
export const remove = (uid: number, callback: Function) => {
  const queryString = "DELETE From timeSlot WHERE uid=?";

  db.query(queryString, uid, (err) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};
