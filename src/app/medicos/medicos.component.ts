import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../services/medicos.service';
import { Medicos } from 'src/models/Response/medicos.model';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  standalone: true,
  imports: [CommonModule],
  providers: [MedicosService],
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {
  listaMedicos: Medicos[] = new Array<Medicos>();

  constructor(private medicosService: MedicosService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.medicosService.getMedicos().subscribe({
      next: (res) => {
        return this.listaMedicos = res;
      },
      error: (error) => {
        catchError(error);
        this.snackBar.open(error.error, 'Fechar', { duration: 5000 });
      },
    });
  }
}
