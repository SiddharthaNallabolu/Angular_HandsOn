import { Department } from "./Department";
import { Skill } from "./Skills";

export interface Employee {
    Id: number;
    Name: string;
    Salary: number;
    Permanent: boolean;
    Department: Department;
    Skills: Skill[];
    DoB: Date;
}