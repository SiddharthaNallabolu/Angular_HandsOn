import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;
  a: any;
  res: any = [];
  constructor(private http: HttpClient) {
    this.url = "https://reqres.in/api/users?page=2";
  }

  // HTTP Get
  getAllUsers(): any {
    this.http.get(this.url).subscribe(response => {
      this.a = JSON.stringify(response);
      this.res = response;
    });
    return this.a;
  }

  Create(obj: User) {
    this.http.post(this.url, JSON.stringify(obj)).subscribe((response: any) => {
      console.log("Working");
    });
  }

  Delete(obj :User)
  {
    this.http.delete(this.url + '/' + obj.id).subscribe(response => {
    });
  }
}
