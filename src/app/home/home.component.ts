import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Token } from 'src/models/token.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userTypeEnum = {
    MEDICO: 'M',
    PACIENTE: 'P'
  }
  usuarioLogado: Token = jwtDecode(localStorage.getItem('authToken') as string)
  tipoUsuario: string = this.usuarioLogado.Tipo as string;
  welcomeMessage: string = `Olá ${this.tipoUsuario == 'P' ? `paciente ${this.usuarioLogado.Nome}` : `Dr. ${this.usuarioLogado.Nome}`}, seja bem-vindo ao sistema Health&Med.`;

  constructor(private router: Router) {}

  doLogout() {
    localStorage.clear()
    this.router.navigateByUrl('/');
  }
}
