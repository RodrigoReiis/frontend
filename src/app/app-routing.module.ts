import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroMedicoComponent } from './cadastro-medico/cadastro-medico.component';
import { MedicosComponent } from './medicos/medicos.component';
import { HomeComponent } from './home/home.component';
import { routeGuardGuard } from './route-guard.guard';
import { DisponibilidadeComponent } from './disponibilidade/disponibilidade.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { LoginComponent } from './login/login.component';

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
        path: 'medicos', component: MedicosComponent, canActivateChild: [routeGuardGuard]
      },
      {
        path: 'agendamentos', component: AgendamentoComponent, canActivateChild: [routeGuardGuard]
      },
      {
        path: 'disponibilidade', component: DisponibilidadeComponent, canActivateChild: [routeGuardGuard]
      },
    ], canActivate: [routeGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes)]
})
export class AppRoutingModule { }
