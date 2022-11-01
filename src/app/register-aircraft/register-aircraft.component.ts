import { LocalStorageService } from './../shared/services/local-storage.service';
import { AircraftModelEnum } from './../shared/models/aircraft.dto';
import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../shared/services/aircraft.service';

@Component({
  selector: 'app-register-aircraft',
  templateUrl: './register-aircraft.component.html',
  styleUrls: ['./register-aircraft.component.css'],
  providers:[]
})
export class RegisterAircraftComponent implements OnInit {

  name: string = '';
  model: any;

  constructor(private aircraftService : AircraftService) { }
  
  submitRegister() {
    this.aircraftService.insert(this.name, this.model);

    alert("Aircraft succesfully registered!");
  }

  submitDisabled() : boolean {
    if (this.name === '') {
      return true;
    }
    if (this.model == null) {
      return true;
    }
    else {
      return false;
    }
  }

  ngOnInit(): void {
 
  }

}
