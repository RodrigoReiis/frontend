import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environments';
import { MedicoRequest } from 'src/models/Request/MedicoRequest.model';
import { PacienteRequest } from 'src/models/Request/PacienteRequest.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  async cadastrarPaciente(paciente: PacienteRequest) {
    this.http.post(this.apiUrl.concat(`/Usuario/cadastrar-paciente`), paciente).subscribe((response) => {
      return new Promise((resolve, reject) => {
        console.log(response, 'response')
        resolve((res: any) => {
          console.log(res, 'resd')
        }),
        reject((err: any) => {
          console.log(err, 'erro')
        })
      })
    })
  }
  async cadastrarMedico(medico: MedicoRequest) {
    this.http.post(this.apiUrl.concat(`/Usuario/cadastrar-paciente`), medico).subscribe((response) => {
      return new Promise((resolve, reject) => {
        resolve((res: any) => {
          console.log(res, 'resd')
        }),
        reject((err: any) => {
          console.log(err, 'erro')
        })
      })
    })
  }
}
