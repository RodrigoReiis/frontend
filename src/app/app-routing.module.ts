import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { MedicosComponent } from './medicos/medicos.component';
import { HomeComponent } from './home/home.component';
import { DisponibilidadeComponent } from './disponibilidade/disponibilidade.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/guards/authGuard.guard';
import { PacientesAgendadosComponent } from './pacientes-agendados/pacientes-agendados.component';

const userTypeEnum = {
  MEDICO: 'M',
  PACIENTE: 'P'
}

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'cadastro-medico', component: CadastroMedicoComponent
  },
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'medicos', component: MedicosComponent, canActivateChild: [AuthGuard],
      },
      {
        path: 'agendamentos', component: AgendamentoComponent, canActivateChild: [AuthGuard]
      },
      {
        path: 'disponibilidade', component: DisponibilidadeComponent, canActivateChild: [AuthGuard],  data: { canUse: userTypeEnum.MEDICO }
      },
      {
        path: 'pacientes-agendados', component: PacientesAgendadosComponent, canActivateChild: [AuthGuard],  data: { canUse: userTypeEnum.MEDICO }
      },
    ], canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes)]
})
export class AppRoutingModule { }
