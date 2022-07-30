import "jest";
import * as express from "express";
import * as request from "supertest";
import {
  StatusCodes,
} from "http-status-codes";
describe("status integration tests", () => {
  let app: express.Application;
  beforeAll(async () => {
  });
  it("can get time slots", async () => {
    await request(app)
        .get("/timeSlot")
        .set("Accept", "application/json")
        .expect((res: request.Response) => {
          // eslint-disable-next-line no-console
          console.log(res.text);
        })
        .expect(StatusCodes.OK);
  });
  it("can get employees", async () => {
    await request(app)
        .get("/timeSlot")
        .set("Accept", "application/json")
        .expect((res: request.Response) => {
          // eslint-disable-next-line no-console
          console.log(res.text);
        })
        .expect(StatusCodes.OK);
  });
});
