import { RegisterAircraftComponent } from './register-aircraft/register-aircraft.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAircraftComponent } from './update-aircraft/update-aircraft.component';

const routes: Routes = [
{ path: 'RegisterAircrafts', component: RegisterAircraftComponent },
{ path: 'UpdateAircraft/:numControl', component: UpdateAircraftComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
