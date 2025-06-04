import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthenticationResponse, LoginRequest } from '../models/auth.model';
import { of, tap } from 'rxjs';
import { Router } from '@angular/router';

export const BEARER_TOKEN = 'Bearer Token';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  private httpClient = inject(HttpClient);
  private router = inject(Router);

  private authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }

  constructor() {
    this.authenticated = !!localStorage.getItem(BEARER_TOKEN);
  }

  login(request: LoginRequest) {
    return this.httpClient
      .post<AuthenticationResponse>('api/v1/auth/authenticate', request)
      .pipe(tap(response => this.handleAuth(response)));
  }

  register(request: LoginRequest) {
    return this.httpClient.post<AuthenticationResponse>('/api/v1/auth/register', request).pipe(tap(response => this.handleAuth(response)));
  }

  logout() {
    localStorage.removeItem(BEARER_TOKEN);
    this.authenticated = false;
    void this.router.navigate(['']);
    return of(true);
  }

  private handleAuth(response: AuthenticationResponse) {
    localStorage.setItem(BEARER_TOKEN, response.token);
    this.authenticated = true;
  }
}
