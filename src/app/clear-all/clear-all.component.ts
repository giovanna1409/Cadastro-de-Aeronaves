import { AircraftService } from './../shared/services/aircraft.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clear-all',
  templateUrl: './clear-all.component.html',
  styleUrls: ['./clear-all.component.css']
})
export class ClearAllComponent implements OnInit {

  constructor(private aircraftService : AircraftService, private router: Router) { }

  clearAll() {
    if (confirm('Press "OK" if you really want to clear all the saved informations') == true) {
      this.aircraftService.clearAll();
      alert('Now the list is empty again!');
      this.router.navigateByUrl("");
    }
  }

  ngOnInit(): void {
  }

}