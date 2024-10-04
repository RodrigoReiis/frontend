import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'environments/environments';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  api = environment.apiUrl;
  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  async getMedicos() {
    return this.http.get(this.api.concat(`/Usuario/listar`), {
      headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('authToken') })
    }).subscribe({
      next: (response) => {
        return response;
      },
      error: (error) => {
        catchError(error);
        this.snackBar.open(error.error, 'Fechar', { duration: 5000 });
      }
    })
  }
}
