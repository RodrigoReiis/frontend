import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisponibilidadeComponent } from './disponibilidade.component';

const routes: Routes = [
  { path: '', component: DisponibilidadeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisponibilidadeRoutingModule { }
