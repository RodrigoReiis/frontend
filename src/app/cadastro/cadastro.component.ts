import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { PacienteRequest } from 'src/models/Request/PacienteRequest.model';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  })

  constructor(private signupService: SignupService, private route: Router) {}

  doSignUp() {
    const pacienteRequest = new PacienteRequest(
      this.form.get('nome')?.value || '',
      this.form.get('email')?.value || '' ,
      this.form.get('cpf')?.value || '',
      this.form.get('senha')?.value || '',
    )
    this.signupService.cadastrarPaciente(pacienteRequest).then((response) => {
      console.log(response, 'RESP')
      this.route.navigateByUrl('/');
      return true
    })
  }
}
