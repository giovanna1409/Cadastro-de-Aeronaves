import { AircraftService } from './../shared/services/aircraft.service';
import { Component, OnInit } from '@angular/core';
import { AircraftDto } from '../shared/models';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css'],
})
export class AircraftListComponent implements OnInit {

  aircrafts : AircraftDto[] = this.aircraftService.getAll();

  constructor(private aircraftService : AircraftService) { }

  ngOnInit(): void {
    
  }

}
