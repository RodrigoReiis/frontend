import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-disponibilidade',
  templateUrl: './disponibilidade.component.html',
  styleUrls: ['./disponibilidade.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class DisponibilidadeComponent {
  isDiaTodo = true;

  form = new FormGroup({
    data: new FormControl(),
    diaTodo: new FormControl('Sim'),
  })

  changeDiaTodo(value: boolean) {
    this.isDiaTodo = value;
  }
}
