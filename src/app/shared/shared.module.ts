import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { AircraftService } from './services/aircraft.service';
import { LocalStorageService } from './services/local-storage.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  providers: [
    LocalStorageService,
    AircraftService
  ]
})
export class SharedModule {}
