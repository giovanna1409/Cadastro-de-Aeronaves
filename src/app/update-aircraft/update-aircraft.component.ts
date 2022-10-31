import { LocalStorageService } from './../shared/services/local-storage.service';
import { AircraftService } from './../shared/services/aircraft.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-update-aircraft',
  templateUrl: './update-aircraft.component.html',
  styleUrls: ['./update-aircraft.component.css']
})
export class UpdateAircraftComponent implements OnInit {

  name: string = '';
  model: any;

  constructor(private aircraftService : AircraftService, private activatedRoute: ActivatedRoute) { }

  updateAircraft() {

    let numControl = (this.activatedRoute.snapshot.paramMap.get('numControl')!);

    this.aircraftService.update(numControl, this.name, this.model);

    alert("Aircraft informations succesfully updated!");
  }

  ngOnInit(): void {
  }

}
