import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from 'environments/environments';
import { Router } from '@angular/router';
import { TokenResponse } from 'src/models/Response/tokenResponse.model';
import { catchError, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) {}

  async authentication(email: string, password: string) {
    const api = environment.apiUrl;
    this.http.post(api.concat(`/Usuario/autenticar`), { email: email, senha: password }, { observe: 'response' })
    .subscribe({
      next: (response) => {
        if(response) {
          const res = response.body as TokenResponse;
          localStorage.setItem('authToken', res.token);
          this.router.navigateByUrl('/home');
        }
        return response;
      },
      error: (err) => {
          catchError(err)
          this._snackBar.open(err.error, 'Fechar');
      },
    })
  }
}
