import {Department} from "./Department";
import {Sondage} from "./Sondage";

/**
 * a class defining all attributes an Employee has
 */
export class Employe {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  age: number;
  department: Department;
  sondages: Sondage[];
}
