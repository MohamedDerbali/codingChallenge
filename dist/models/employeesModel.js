"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignToSlot = exports.remove = exports.update = exports.findAll = exports.create = void 0;
const mysql_connector_1 = require("../utils/mysql.connector");
const create = (employee, callback) => {
    var _a;
    const queryString = "INSERT INTO employee (name, age, timeSlot) VALUES (?, ?, ?)";
    mysql_connector_1.db.query(queryString, [employee.name, employee.age, (_a = employee.timeSlot) === null || _a === void 0 ? void 0 : _a.uid], (err, result) => {
        if (err) {
            callback(err);
        }
        const uid = result.insertId;
        callback(null, uid);
    });
};
exports.create = create;
const findAll = (callback) => {
    const queryString = `
      SELECT *
      FROM employee `;
    mysql_connector_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        callback(null, rows);
    });
};
exports.findAll = findAll;
const update = (employee, callback) => {
    var _a;
    // eslint-disable-next-line max-len
    const queryString = "UPDATE employee SET name=?, age=?, timeSlot=? WHERE uid=?";
    mysql_connector_1.db.query(queryString, [employee.name, employee.age, (_a = employee.timeSlot) === null || _a === void 0 ? void 0 : _a.uid, employee.uid], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
const remove = (uid, callback) => {
    const queryString = "DELETE From employee WHERE uid=?";
    mysql_connector_1.db.query(queryString, uid, (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.remove = remove;
// eslint-disable-next-line max-len
const assignToSlot = (assignEmployee, callback) => {
    const queryString = "UPDATE employee SET timeSlot=? WHERE uid=?";
    // eslint-disable-next-line max-len
    console.log(assignEmployee);
    mysql_connector_1.db.query(queryString, [assignEmployee.timeSlotId, assignEmployee.employeeId], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.assignToSlot = assignToSlot;
