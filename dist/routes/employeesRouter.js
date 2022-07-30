"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = void 0;
const express_1 = require("express");
const model = require("../models/employeesModel");
// eslint-disable-next-line new-cap
const employeeRouter = (0, express_1.Router)();
exports.employeeRouter = employeeRouter;
employeeRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    model.findAll((err, employees) => {
        if (err) {
            return res.status(500).json({ errorMessage: err.message });
        }
        res.status(200).json({ data: employees });
    });
}));
employeeRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newEmployee = req.body;
    model.create(newEmployee, (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json({ employee: newEmployee });
    });
}));
employeeRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    model.remove(id, (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json({ data: "employee removed successfully." });
    });
}));
employeeRouter.put("/edit/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let employee = req.body;
    const { id } = req.params;
    employee = Object.assign(Object.assign({}, req.body), { uid: id });
    model.update(employee, (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).send(employee);
    });
}));
employeeRouter.put("/assign", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    model.assignToSlot(data, (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).send(data);
    });
}));
