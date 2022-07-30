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
exports.timeSlotRouter = void 0;
const express_1 = require("express");
const model = require("../models/timeSlotModel");
// eslint-disable-next-line new-cap
const timeSlotRouter = (0, express_1.Router)();
exports.timeSlotRouter = timeSlotRouter;
timeSlotRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    model.findAll((err, timeSlots) => {
        if (err) {
            return res.status(500).json({ errorMessage: err.message });
        }
        res.status(200).json({ data: timeSlots });
    });
}));
timeSlotRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newtimeSlot = req.body;
    model.create(newtimeSlot, (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json({ timeSlot: newtimeSlot });
    });
}));
timeSlotRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    model.remove(id, (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json({ data: "timeSlot removed successfully." });
    });
}));
timeSlotRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let timeSlot = req.body;
    const { id } = req.params;
    timeSlot = Object.assign(Object.assign({}, req.body), { uid: id });
    model.update(timeSlot, (err) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).send();
    });
}));
