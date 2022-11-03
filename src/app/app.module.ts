import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [{ provide: BsDropdownConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }

