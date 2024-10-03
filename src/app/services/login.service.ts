import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from 'environments/environments';
import { Router } from '@angular/router';
import { TokenResponse } from 'src/models/Response/tokenResponse.model';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  async authentication(email: string, password: string) {
    const api = environment.apiUrl;
    this.http.post(api.concat(`/Usuario/autenticar`), { email: email, senha: password }, { observe: 'response' }).subscribe((response) => {
      if(response) {
        const res = response.body as TokenResponse;
        localStorage.setItem('authToken', res.token);
        this.router.navigateByUrl('/home');
      }
      return response;
    })
  }
}
