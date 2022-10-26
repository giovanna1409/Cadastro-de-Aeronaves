import { CadastrarAeronaveComponent } from './cadastrar-aeronave/cadastrar-aeronave.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'CadastroAeronaves', component: CadastrarAeronaveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
