import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroMedicoRoutingModule } from './cadastro-medico-routing.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CadastroMedicoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet
  ]
})
export class CadastroMedicoModule { }
