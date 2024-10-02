import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisponibilidadeRoutingModule } from './disponibilidade-routing.module';
import { DisponibilidadeComponent } from './disponibilidade.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [DisponibilidadeComponent],
  imports: [
    CommonModule,
    DisponibilidadeRoutingModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ]
})
export class DisponibilidadeModule { }
