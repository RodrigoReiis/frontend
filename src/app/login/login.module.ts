import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, CommonModule, RouterLink]
})
export class LoginModule { }
