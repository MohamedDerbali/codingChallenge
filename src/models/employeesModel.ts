import {Employee} from "../types/employee";
import {db} from "../utils/mysql.connector";
import {OkPacket, RowDataPacket} from "mysql2";
import {AssignEmployee} from "../types/AssignEmployee";
export const create = (employee: Employee, callback: Function) => {
  const queryString =
    "INSERT INTO employee (name, age, timeSlot) VALUES (?, ?, ?)";
  db.query(
      queryString,
      [employee.name, employee.age, employee.timeSlot?.uid],
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
      FROM employee `;

  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;
    callback(null, rows);
  });
};
export const update = (employee: Employee, callback: Function) => {
  // eslint-disable-next-line max-len
  const queryString =
    "UPDATE employee SET name=?, age=?, timeSlot=? WHERE uid=?";
  db.query(
      queryString,
      [employee.name, employee.age, employee.timeSlot?.uid, employee.uid],
      (err, result) => {
        if (err) {
          callback(err);
        }
        callback(null);
      },
  );
};
export const remove = (uid: number, callback: Function) => {
  const queryString = "DELETE From employee WHERE uid=?";

  db.query(queryString, uid, (err, result) => {
    if (err) {
      callback(err);
    }
    callback(null);
  });
};
// eslint-disable-next-line max-len
export const assignToSlot = (
    assignEmployee: AssignEmployee,
    callback: Function,
) => {
  const queryString = "UPDATE employee SET timeSlot=? WHERE uid=?";
  // eslint-disable-next-line max-len
  db.query(
      queryString,
      [assignEmployee.timeSlotId, assignEmployee.employeeId],
      (err, result) => {
        if (err) {
          callback(err);
        }
        callback(null);
      },
  );
};
