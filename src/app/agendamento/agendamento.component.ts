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




@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  standalone: true,
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    provideMomentDateAdapter(),
  ],
  imports: [ReactiveFormsModule,MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatHint],
  styleUrls: ['./agendamento.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgendamentoComponent {
  form = new FormGroup({
    idMedico: new FormControl(),
    dataAgendamento: new FormControl(),
  })

  formData = new FormGroup({
    dataInicio: new FormControl(),
    dataFim: new FormControl()
  })

  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));
  readonly dateFormatString = computed(() => {
    if (this._locale() === 'pt-BR') {
      return 'DD/MM/YYYY';
    }
    return '';
  });

  readonly dialogRef = inject(MatDialogRef<AgendamentoComponent>);
  dialogData = inject(MAT_DIALOG_DATA);
  idMedico: string = this.dialogData.idMedico;
  listaMedicos: Medicos[] = this.dialogData.listaMedicos;


  realizarAgendamento() {
    this.closeAgendamento();
  }

  closeAgendamento() {
    this.dialogRef.close();
  }
}
