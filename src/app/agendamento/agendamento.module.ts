import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentoComponent } from './agendamento.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [AgendamentoComponent],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ]
})
export class AgendamentoModule { }
