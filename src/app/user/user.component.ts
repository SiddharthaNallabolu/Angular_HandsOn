import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from './../user.service';
import { Department } from './../emp-details/Department';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  response: any;
  create: boolean;
  user: User;
  constructor(private userService: UserService) {
    this.create = false;
    this.user = { id: 0, email: "", first_name: "", last_name: "", avatar: "" };
  }

  ngOnInit(): void {
    this.response = JSON.parse(this.userService.getAllUsers());
  }

  onClick() {
    this.create = !this.create;
  }

  //Create User
  onSubmit(userForm: NgForm) {
    this.user = { id: this.response.data.length + 1, email: userForm.value.Email, first_name: userForm.value.FirstName, last_name: userForm.value.LastName, avatar: userForm.value.ImageUrl };
    this.userService.Create(userForm.value);
    this.response.data.splice(0, 0, this.user);
    this.create = !this.create;
  }

  //Delete User
  onDelete(user: User) {
    let index = this.response.data.indexOf(user);
    this.userService.Delete(user);
    this.response.data.splice(index, 1);
  }
}
