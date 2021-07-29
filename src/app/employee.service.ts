import { Injectable } from '@angular/core';
import { Employee } from './emp-details/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[];
  constructor() {
    this.employees = [
      {
        Id: 1, Name: "Ravi", Salary: 50000, Permanent: true,
        Department: { Id: 5, Name: "IT" },
        Skills: [{ Id: 3, Name: "Java" }, { Id: 4, Name: "C#" }],
        DoB: new Date("04/05/1999")
      },
      {
        Id: 2, Name: "Rahul", Salary: 30000, Permanent: false,
        Department: { Id: 4, Name: "Sales" },
        Skills: [{ Id: 1, Name: "C" }, { Id: 2, Name: "C++" }],
        DoB: new Date("05/09/1999")
      },
      {
        Id: 3, Name: "Sandy", Salary: 25000, Permanent: false,
        Department: { Id: 1, Name: "IT" },
        Skills: [{ Id: 3, Name: "Java" }, { Id: 4, Name: "C#" }],
        DoB: new Date("07/08/1999")
      },
      {
        Id: 4, Name: "Hari", Salary: 70000, Permanent: false,
        Department: { Id: 2, Name: "Sales" },
        Skills: [{ Id: 3, Name: "Java" }, { Id: 4, Name: "C#" }],
        DoB: new Date("12/13/1974")
      }
    ]
  }

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(Id: number): Employee {
    let obj = this.employees.find(i => i.Id === Id);
    if (obj != null) {
      return obj;
    }
    obj = {
      Id: 0, Name: "", Salary: 0, Permanent: false,
      Department: { Id: 0, Name: "" },
      Skills: [{ Id: 0, Name: "" }],
      DoB: new Date("")
    }
    return obj;
  }
}
