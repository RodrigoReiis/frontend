import { CanActivateFn } from '@angular/router';

export const routeGuardGuard: CanActivateFn = (route, state) => {
  console.log(route);
  console.log(state);
  return true;
};
