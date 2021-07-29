import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from './../emp-details/Employee';
import { Department } from './../emp-details/Department';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  employee: Employee;
  departments: Department[];
  constructor() {
    this.employee = {
      Id: 0,
      Name: "",
      Salary: 0,
      Permanent: false,
      Department: { Id: 0, Name: "" },
      Skills: [],
      DoB: new Date()
    };
    this.departments = [

      { Id: 1, Name: "Payroll" },

      { Id: 2, Name: "Internal" },

      { Id: 3, Name: "HR" }

    ];
  }

  onSubmit(empForm: any): void {
    this.employee.Name = empForm.value.Name;
    this.employee.Salary = empForm.value.Salary;
    this.employee.Permanent = empForm.value.Permanent;
    var obj = this.departments.find(i => i.Id == empForm.value.Department);
    if (obj != null) {
      this.employee.Department = obj;
    }
  }
  ngOnInit(): void {
  }

}
