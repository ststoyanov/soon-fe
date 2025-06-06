import { ActivatedRouteSnapshot, CanActivateFn, RedirectFunction, Router, RouterStateSnapshot } from '@angular/router';
import { AuthHttpClient } from '../../auth/auth-http-client';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (_: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const authenticationService = inject(AuthHttpClient);

  if (!authenticationService.isAuthenticated()) {
    return router.createUrlTree(['/login'], { queryParams: { return_url: state.url } });
  }

  return true;
};

export const HomeRedirect: RedirectFunction = () => {
  const router = inject(Router);
  const authenticationService = inject(AuthHttpClient);

  if (authenticationService.isAuthenticated()) {
    return router.createUrlTree(['/tracked']);
  }

  return router.createUrlTree(['/login']);
};
