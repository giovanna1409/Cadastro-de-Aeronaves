import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAircraftComponent } from './register-aircraft/register-aircraft.component';
import { UpdateAircraftComponent } from './update-aircraft/update-aircraft.component';
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { ClearAllComponent } from './clear-all/clear-all.component';

const routes: Routes = [
{ path: 'RegisterAircrafts', component: RegisterAircraftComponent },
{ path: 'UpdateAircraft/:numControl', component: UpdateAircraftComponent },
{ path: '**', component: AircraftListComponent },
{ path: 'ClearAll', component: ClearAllComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
