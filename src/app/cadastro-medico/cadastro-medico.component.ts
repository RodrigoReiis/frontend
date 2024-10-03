import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SignupService } from '../services/signup.service';
import { MedicoRequest } from 'src/models/Request/MedicoRequest.model';

@Component({
  selector: 'app-cadastro-medico',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './cadastro-medico.component.html',
  styleUrls: ['./cadastro-medico.component.scss']
})
export class CadastroMedicoComponent {
  form = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    crm: new FormControl('', Validators.required),
  })

  constructor(private signupService: SignupService, private route: Router) {}

  doSignUp() {
    const medicoRequest = new MedicoRequest(
      this.form.get('nome')?.value || '',
      this.form.get('email')?.value || '' ,
      this.form.get('cpf')?.value || '',
      this.form.get('crm')?.value || '',
      this.form.get('senha')?.value || '',
    )
    this.signupService.cadastrarMedico(medicoRequest).then((response) => {
      console.log(response, 'RESP')
      this.route.navigateByUrl('/');
      return true
    })
  }
}
