import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { jwtDecode } from "jwt-decode";
import { Token } from "src/models/token.model";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {
  authToken: string = '';
  jwtDecoded: Token = new Token();

  constructor(private router: Router) {}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(!this.validaToken()) return false;
    return true;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(!this.validaToken()) return false;
    return true;
  }

  getToken(): string | null {
    this.authToken = localStorage.getItem('authToken') || '';
    return this.authToken
  }

  validaToken() {
    if(!this.getToken()) {
      localStorage.clear();
      this.router.navigateByUrl('/')
      return false
    }
    this.getToken();
    this.geraAtributosToken();
    return true;
  }

  geraAtributosToken() {
    if(this.getToken()) {
      this.jwtDecoded = jwtDecode(this.authToken)
    }
  }
}
