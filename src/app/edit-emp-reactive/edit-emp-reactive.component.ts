import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from '../emp-details/Department';
import { Employee } from '../emp-details/Employee';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {
  employee: Employee;
  departments: Department[];
  empForm: FormGroup;
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

    this.empForm = new FormGroup({
      'name': new FormControl(this.employee.Name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)]),
      'salary': new FormControl(this.employee.Salary, [Validators.required]),
      'department': new FormControl(this.employee.Department, [
        Validators.required
      ])
    });

  }
  ngOnInit(): void {
  }
  get name() { return this.empForm.get('name'); }
  get salary() { return this.empForm.get('salary'); }

}
