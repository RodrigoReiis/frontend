import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MedicosService } from '../services/medicos.service';
import { MedicoDisponibilidadeRequest } from 'src/models/Request/medicoDisponibilidadeRequest.model';
import { Token } from 'src/models/token.model';
import { jwtDecode } from 'jwt-decode';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-disponibilidade',
  templateUrl: './disponibilidade.component.html',
  styleUrls: ['./disponibilidade.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [MedicosService]
})
export class DisponibilidadeComponent {
  constructor(private medicoService: MedicosService, private snackBar: MatSnackBar) {}
  isDiaTodo = true;
  loggedUser: Token = new Token();

  form = new FormGroup({
    data: new FormControl('', Validators.required),
    diaTodo: new FormControl('Sim'),
    horarioInicio: new FormControl(),
    horarioTermino: new FormControl(),
  })

  changeDiaTodo(value: boolean) {
    this.isDiaTodo = value;
  }

  salvarDisponibilidade() {
    this.loggedUser = jwtDecode(localStorage.getItem('authToken') as string);
    const { data, diaTodo, horarioInicio, horarioTermino } = this.form.controls
    const diaSemana = moment(data.value).weekday();
    let inicio = moment().format(`${data.value}T00:00:00.000`);
    let fim = moment().format(`${data.value}T23:59:00.000`);
    if(!this.isDiaTodo) {
      inicio = moment().format(`${data.value}T${horarioInicio.value}:00.000`);
      fim = moment().format(`${data.value}T${horarioTermino.value}:00.000`);
    }
    const medicoRequest = new MedicoDisponibilidadeRequest(this.loggedUser.Id || ``, diaSemana, inicio, fim)
    this.medicoService.salvarDisponibilidade(medicoRequest).subscribe(
      (result) => {
        this.snackBar.open('Disponibilidade salva com sucesso', 'Fechar', { duration: 2000 })
      },
      (err) => {
        this.snackBar.open('Erro ao salvar horário', 'Fechar', { duration: 2000 })
      }
    )
  }
}
