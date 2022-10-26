import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AeronavesComponent } from './aeronaves/aeronaves.component';
import { ListaAeronavesComponent } from './aeronaves/lista-aeronaves/lista-aeronaves.component';
import { AeronaveInfoComponent } from './aeronaves/aeronave-info/aeronave-info.component';
import { CadastrarAeronaveComponent } from './cadastrar-aeronave/cadastrar-aeronave.component';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    AeronavesComponent,
    ListaAeronavesComponent,
    AeronaveInfoComponent,
    CadastrarAeronaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: BsDropdownConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class Aeronaves {
  name: string | undefined;
}
