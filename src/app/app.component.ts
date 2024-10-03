import { Component, isDevMode, OnInit } from '@angular/core';
import { environment } from 'environments/environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  ngOnInit(): void {
    if(isDevMode()) {
      console.log('dev', environment.apiUrl)
    }
  }
}
