import { Component, OnInit } from '@angular/core';
import { Employee } from './../emp-details/Employee';
import { FormControl } from '@angular/forms';
import { EmployeeService } from './../employee.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees: Employee[];
  filtered: Employee[];
  search: string;
  constructor(private empService: EmployeeService) {
    this.search = "";
    this.employees = empService.getAllEmployees();
    this.filtered = this.employees;
  }

  ngOnInit(): void {
  }
}
