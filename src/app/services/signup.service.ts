import { HttpClient } from '@angular/common/http';
import   { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'environments/environments';
import { catchError } from 'rxjs';
import { MedicoRequest } from 'src/models/Request/MedicoRequest.model';
import { PacienteRequest } from 'src/models/Request/PacienteRequest.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private route: Router) { }

  async cadastrarPaciente(paciente: PacienteRequest) {
    this.http.post(this.apiUrl.concat(`/Usuario/cadastrar-paciente`), paciente).subscribe({
      next: (response) => {
        this.route.navigateByUrl('/');
        return response;
      },
      error: (err) => {
        catchError(err)
        this._snackBar.open(err.error, 'Fechar');
      }
    });

  }
  async cadastrarMedico(medico: MedicoRequest) {
    this.http.post(this.apiUrl.concat(`/Usuario/cadastrar-medico`), medico).subscribe({
      next: (response) => {
        this.route.navigateByUrl('/');
        return response;
      },
      error: (err) => {
        catchError(err)
        this._snackBar.open(err.error, 'Fechar');
      }
    })
  }
}
