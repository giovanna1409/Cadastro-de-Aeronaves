import { LocalStorageService } from './services/local-storage.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftService } from './services/aircraft.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageService,
    AircraftService
  ]
})
export class SharedModule {}
