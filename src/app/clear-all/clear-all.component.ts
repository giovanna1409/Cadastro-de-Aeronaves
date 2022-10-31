import { AircraftService } from './../shared/services/aircraft.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clear-all',
  templateUrl: './clear-all.component.html',
  styleUrls: ['./clear-all.component.css']
})
export class ClearAllComponent implements OnInit {

  constructor(private aircraftService : AircraftService ) { }

  clearAll() {
    this.aircraftService.clearAll();
  }

  ngOnInit(): void {
  }

}
