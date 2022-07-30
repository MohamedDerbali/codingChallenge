import {Base} from "./base";
import {TimeSlot} from "./timeSlot";
export interface Employee extends Base {
  name: string;
  age: number;
  timeSlot?: TimeSlot;
}
