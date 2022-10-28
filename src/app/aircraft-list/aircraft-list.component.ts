import { Component, OnInit } from '@angular/core';
import { Aircraft } from '../shared/models';
import { LocalStorageService } from '../shared/services/local-storage.service';


@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css'],
})
export class AircraftListComponent implements OnInit {

  aircrafts: Aircraft[] = [];

  constructor(private localStorageService : LocalStorageService) { }

  ngOnInit(): void {
    this.localStorageService.set('Aeronave1', 2);
  }

}
