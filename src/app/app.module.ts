import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

import { RegisterAircraftComponent } from './register-aircraft/register-aircraft.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { UpdateAircraftComponent } from './update-aircraft/update-aircraft.component';
import { ClearAllComponent } from './clear-all/clear-all.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterAircraftComponent,
    AircraftListComponent,
    UpdateAircraftComponent,
    ClearAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: BsDropdownConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }

