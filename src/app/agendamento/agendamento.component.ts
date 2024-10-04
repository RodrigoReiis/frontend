import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Medicos } from 'src/models/Response/medicos.model';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input'
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { jwtDecode } from 'jwt-decode';
import { AgendarConsulta } from 'src/models/Request/agendarConsulta.model';
import { Token } from 'src/models/token.model';
import { PacienteService } from '../services/paciente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import * as moment from 'moment';




@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  standalone: true,
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    provideMomentDateAdapter(),
    PacienteService
  ],
  imports: [CommonModule, ReactiveFormsModule,MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatHint],
  styleUrls: ['./agendamento.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgendamentoComponent {
  horarios = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ]
  constructor(private pacienteService: PacienteService, private snackBar: MatSnackBar) {}

  readonly dialogRef = inject(MatDialogRef<AgendamentoComponent>);
  dialogData = inject(MAT_DIALOG_DATA);
  idMedico: string = this.dialogData.idMedico;
  listaMedicos: Medicos[] = this.dialogData.listaMedicos;

  form = new FormGroup({
    idMedico: new FormControl(this.idMedico),
    dataConsulta: new FormControl(),
    horarioAgenda: new FormControl()
  })

  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));
  readonly dateFormatString = computed(() => {
    if (this._locale() === 'pt-BR') {
      return 'DD/MM/YYYY';
    }
    return '';
  });


  realizarAgendamento() {
    const { idMedico, dataConsulta, horarioAgenda } = this.form.controls;
    const loggedUser: Token = jwtDecode(localStorage.getItem('authToken') as string)
    const dt = moment(dataConsulta.value).format('YYYY-MM-DD')
    const dtConsulta = moment().format(`${dt}T${horarioAgenda.value}:00.000Z`)
    const agendamentoRequest = new AgendarConsulta(dtConsulta, idMedico.value || '', loggedUser.Id || '')
    this.pacienteService.agendarConsulta(agendamentoRequest).subscribe(
      (result) => {
        this.snackBar.open('Consulta salva', 'Fechar', { duration: 5000 });
      },
      (error) => {
        this.snackBar.open(error.error, 'Fechar', { duration: 5000 });
      }
  )
    this.closeAgendamento();
  }

  setHorarioAgenda(value: string) {
    this.form.controls.horarioAgenda.setValue(value);
  }

  closeAgendamento() {
    this.dialogRef.close();
  }
}
