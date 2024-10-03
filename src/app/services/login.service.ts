import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'environments/environments';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private http: HttpClient) {}

  async authentication(email: string, password: string) {
    const api = environment.apiUrl;
    this.http.post(api.concat(`autenticar`), { email: email, senha: password }).subscribe((response) => {
      return response;
    });
  }
}
