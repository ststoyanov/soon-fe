import { Routes } from '@angular/router';
import { AuthGuard, HomeRedirect } from './shared/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: HomeRedirect,
  },
  {
    path: 'discover',
    loadComponent: () => import('./discover/page/discover-page').then(m => m.DiscoverPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login-page/login-page').then(m => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register-page/register-page').then(m => m.RegisterPage),
  },
  {
    path: 'tracked',
    loadComponent: () => import('./tracked/page/tracked-page').then(m => m.TrackedPage),
    canActivate: [AuthGuard],
  },
];
