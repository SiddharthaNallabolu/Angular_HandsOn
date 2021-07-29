import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean;
  constructor() {
    this.loggedIn = false;
  }
  login(): void {
    this.loggedIn = true;
  }
  logout(): void {
    this.loggedIn = false;
  }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
