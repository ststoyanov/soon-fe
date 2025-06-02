import { ActivatedRouteSnapshot, CanActivateFn, RedirectFunction, Router, RouterStateSnapshot } from '@angular/router';
import { AuthHttpService } from '../../auth/services/auth.http.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (_: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);
  const authenticationService = inject(AuthHttpService);

  if (!authenticationService.isAuthenticated()) {
    return router.createUrlTree(['/login'], { queryParams: { return_url: state.url } });
  }

  return true;
};

export const HomeRedirect: RedirectFunction = () => {
  const router = inject(Router);
  const authenticationService = inject(AuthHttpService);

  if (authenticationService.isAuthenticated()) {
    return router.createUrlTree(['/tracked']);
  }

  return router.createUrlTree(['/login']);
};
