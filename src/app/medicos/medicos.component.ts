import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  standalone: true,
  imports: [],
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {
  listaMedicos: any = [];

  constructor(private medicosService: MedicosService) {}

  ngOnInit(): void {
    this.medicosService.getMedicos().then((response) => {
      if(response) {
        this.listaMedicos = response;
      }
      return []
    });
  }
}
