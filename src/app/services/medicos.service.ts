import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'environments/environments';
import { catchError, Observable, of, pipe } from 'rxjs';
import { MedicoDisponibilidadeRequest } from 'src/models/Request/medicoDisponibilidadeRequest.model';
import { Medicos } from 'src/models/Response/medicos.model';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  api = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getMedicos(): Observable<Medicos[]> {
    return this.http.get<Medicos[]>(this.api.concat(`/Medico/listar`), {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('authToken') })
    });
  }

  salvarDisponibilidade(medicoRequest: MedicoDisponibilidadeRequest): Observable<MedicoDisponibilidadeRequest> {
    console.log(medicoRequest)
    return this.http.post<MedicoDisponibilidadeRequest>(
      this.api.concat(`/Medico/cadastrar-periodo-atendimento`),
      medicoRequest
    )
  }
}
