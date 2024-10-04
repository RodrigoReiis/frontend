import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'environments/environments';
import { catchError, Observable, of, pipe } from 'rxjs';
import { Medicos } from 'src/models/Response/medicos.model';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  api = environment.apiUrl;
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getMedicos(): Observable<Medicos[]> {
    return this.http.get<Medicos[]>(this.api.concat(`/Medico/listar`), {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('authToken') })
    });
  }
}
