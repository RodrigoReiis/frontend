import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const route: Routes = [
  {
    path: '', component: CadastroComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule]
})
export class CadastroRoutingModule { }
