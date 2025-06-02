import { Routes } from '@angular/router';
import { AuthGuard, HomeRedirect } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: HomeRedirect,
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/views/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/views/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: 'tracked',
    loadComponent: () => import('./tracked/views/tracked/tracked.component').then(m => m.TrackedComponent),
    canActivate: [AuthGuard],
  },
];
