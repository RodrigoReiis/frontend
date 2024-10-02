import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const routes: Routes = [
  {
    path: '', component: CadastroComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
