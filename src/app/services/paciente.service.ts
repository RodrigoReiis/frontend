import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environments';
import { Observable } from 'rxjs';
import { AgendarConsulta } from 'src/models/Request/agendarConsulta.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  api = environment.apiUrl;
  constructor(private http: HttpClient) { }

  agendarConsulta(consulta: AgendarConsulta): Observable<HttpResponse<AgendarConsulta>> {
    return this.http.post<HttpResponse<AgendarConsulta>>(this.api.concat(`/Paciente/marcar-consulta`), {consulta})
  }
}
