import { Component, OnInit } from '@angular/core';
import { Department } from './Department';
import { Skill } from './Skills';
import { Employee } from './Employee';
import { EmployeeService } from './../employee.service';

@Component({
  selector: 'app-empDetails',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  Employees: Employee[];
  constructor(empService: EmployeeService) {
    this.Employees = empService.getAllEmployees();
  }

  ngOnInit(): void {
  }

}
