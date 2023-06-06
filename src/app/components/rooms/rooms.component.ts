import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  
  hideRooms = false;

  hotelName = 'Scandic';

  numberOfRoms = 99;

  constructor() {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  ngOnInit(): void {
  }



}
