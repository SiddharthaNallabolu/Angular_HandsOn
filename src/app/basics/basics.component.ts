import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  favoriteMovie = "Lord of the Rings"
  constructor() { }

  ngOnInit(): void {
  }

}
