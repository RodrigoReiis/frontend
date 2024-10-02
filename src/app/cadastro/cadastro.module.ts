import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    FormControl,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CadastroModule { }
