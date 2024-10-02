import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroMedicoComponent } from './cadastro-medico.component';

const routes: Routes = [
  {
    path: '', component: CadastroMedicoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroMedicoRoutingModule { }
