import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private snackBar: MatSnackBar) { }

  openMessage(message: string) {
    this.snackBar.open(message, 'Fechar', { duration: 5000 });
  }
}
