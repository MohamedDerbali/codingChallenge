import express, {Request, Response} from "express";
import * as model from "../models/timeSlotModel";
import {TimeSlot} from "../types/timeSlot";
// eslint-disable-next-line new-cap
const timeSlotRouter = express.Router();

timeSlotRouter.get("/", async (req: Request, res: Response) => {
  model.findAll((err: Error, timeSlots: TimeSlot[]) => {
    if (err) {
      return res.status(500).json({errorMessage: err.message});
    }
    res.status(200).json({data: timeSlots});
  });
});

timeSlotRouter.post("/", async (req: Request, res: Response) => {
  const newtimeSlot: TimeSlot = req.body;
  model.create(newtimeSlot, (err: Error, uid: number) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }

    res.status(200).json({timeSlot: newtimeSlot});
  });
});

timeSlotRouter.delete("/:id", async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  model.remove(id, (err: Error) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }
    res.status(200).json({data: "timeSlot removed successfully."});
  });
});

timeSlotRouter.put("/:id", async (req: Request, res: Response) => {
  let timeSlot: TimeSlot = req.body;
  const {id} = req.params;
  timeSlot = {...req.body, uid: id};
  model.update(timeSlot, (err: Error) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }

    res.status(200).send();
  });
});

export {timeSlotRouter};
