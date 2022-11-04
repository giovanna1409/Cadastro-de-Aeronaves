import { AircraftDto } from './../shared/models/aircraft.dto';
import { AircraftService } from './../shared/services/aircraft.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-aircraft',
  templateUrl: './update-aircraft.component.html',
  styleUrls: ['./update-aircraft.component.css']
})
export class UpdateAircraftComponent implements OnInit {

  name: string = '';
  model: any;

  see: boolean = false;   //variável criada para usar no ngIf 

  constructor(private aircraftService : AircraftService, private activatedRoute: ActivatedRoute, private router: Router) { }

  updateAircraft() {
    let numControl = (this.activatedRoute.snapshot.paramMap.get('numControl')!);
    this.aircraftService.update(numControl, this.name, this.model);
    alert("Aircraft informations succesfully updated!");
    this.router.navigateByUrl("");
  }

  getAircraft() : AircraftDto {
    let numControl = (this.activatedRoute.snapshot.paramMap.get('numControl')!);
    let aircraft = (this.aircraftService.getByKey(numControl)!);
    return aircraft;
  }

  aircraft = this.getAircraft();

  seeOldInformation() {
    this.see = true;
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