"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.findAll = exports.create = void 0;
const mysql_connector_1 = require("../utils/mysql.connector");
const create = (timeSlot, callback) => {
    const queryString = "INSERT INTO timeSlot (time, description) VALUES (?, ?)";
    mysql_connector_1.db.query(queryString, [timeSlot.time, timeSlot.description], (err, result) => {
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
      FROM timeSlot `;
    mysql_connector_1.db.query(queryString, (err, result) => {
        if (err) {
            callback(err);
        }
        const rows = result;
        callback(null, rows);
    });
};
exports.findAll = findAll;
const update = (timeSlot, callback) => {
    const queryString = "UPDATE timeSlot SET time=?, description=? WHERE uid=?";
    mysql_connector_1.db.query(queryString, [timeSlot.time, timeSlot.description, timeSlot.uid], (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.update = update;
const remove = (uid, callback) => {
    const queryString = "DELETE From timeSlot WHERE uid=?";
    mysql_connector_1.db.query(queryString, uid, (err, result) => {
        if (err) {
            callback(err);
        }
        callback(null);
    });
};
exports.remove = remove;
