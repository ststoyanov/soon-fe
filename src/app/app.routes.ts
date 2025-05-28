import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth/views/login/login.component').then(m => m.LoginComponent)
  },
];
