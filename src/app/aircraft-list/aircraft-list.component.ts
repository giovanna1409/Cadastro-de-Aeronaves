import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AircraftService } from './../shared/services/aircraft.service';
import { AircraftDto } from '../shared/models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css'],
})
export class AircraftListComponent implements OnInit {

  displayedColumns = ['name', 'model', 'actions'];
  dataSource = new MatTableDataSource<AircraftDto>(this.aircraftService.getAll());

  constructor(private aircraftService : AircraftService, private router : Router) {
  }

  deleteAircraft(numControl : string) {

    if (confirm('Press "OK" if you really want to delete this aircraft') == true) {
      this.aircraftService.delete(numControl);

      alert("Aircraft succesfully deleted!");
    }

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}
