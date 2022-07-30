import express, {Request, Response} from "express";
import * as model from "../models/employeesModel";
import {AssignEmployee} from "../types/AssignEmployee";
import {Employee} from "../types/employee";
// eslint-disable-next-line new-cap
const employeeRouter = express.Router();

employeeRouter.get("/", async (req: Request, res: Response) => {
  model.findAll((err: Error, employees: Employee[]) => {
    if (err) {
      return res.status(500).json({errorMessage: err.message});
    }
    res.status(200).json({data: employees});
  });
});

employeeRouter.post("/", async (req: Request, res: Response) => {
  const newEmployee: Employee = req.body;
  model.create(newEmployee, (err: Error) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }

    res.status(200).json({employee: newEmployee});
  });
});

employeeRouter.delete("/:id", async (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  model.remove(id, (err: Error) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }
    res.status(200).json({data: "employee removed successfully."});
  });
});

employeeRouter.put("/edit/:id", async (req: Request, res: Response) => {
  let employee: Employee = req.body;
  const {id} = req.params;
  employee = {...req.body, uid: id};
  model.update(employee, (err: Error) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }

    res.status(200).send(employee);
  });
});

employeeRouter.put("/assign", async (req: Request, res: Response) => {
  const data: AssignEmployee = req.body;
  model.assignToSlot(data, (err: Error) => {
    if (err) {
      return res.status(500).json({message: err.message});
    }

    res.status(200).send(data);
  });
});

export {employeeRouter};
