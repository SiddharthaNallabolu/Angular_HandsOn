import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  message:string;
  constructor(private authService:AuthService,private router: Router) {
    this.userName = "";
    this.password = "";
    this.message = "";
  }

  ngOnInit(): void {
  }
  login(form: NgForm) {
    if (this.userName.toLowerCase() === "admin" && this.password.toLowerCase() === "password") {
      this.authService.login();
      this.router.navigateByUrl("/app-edit-emp");
    }
    else{
      this.message = "Invalid Username or Password"
    }
  }
}
