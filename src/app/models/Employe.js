import {Department} from "./Department";
import {Sondage} from "./Sondage";

export class Employe {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  age: number;
  department: Department;
  sondages: Sondage[];
}
