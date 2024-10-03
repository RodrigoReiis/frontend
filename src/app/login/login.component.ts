import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-a',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form = new FormGroup({
      email: new FormControl(''),
      senha: new FormControl('')
  });

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
  }

  doLogin() {
    const email = this.form.get('email')?.value
    const senha = this.form.get('email')?.value
    if(!email || !senha ) return;
    this.loginService.authentication(email, senha);
  }
}
