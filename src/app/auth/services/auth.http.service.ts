import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationResponse, LoginRequest } from '../models/auth.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {
  constructor(private httpClient: HttpClient) {}

  login(request: LoginRequest) {
    return this.httpClient
      .post<AuthenticationResponse>('api/v1/auth/authenticate', request)
      .pipe(tap(response => this.handleAuth(response)));
  }

  register(request: LoginRequest) {
    return this.httpClient.post<AuthenticationResponse>('/api/v1/auth/register', request).pipe(tap(response => this.handleAuth(response)));
  }

  private handleAuth(response: AuthenticationResponse) {
    localStorage.setItem('token', response.token);
    console.log(localStorage.getItem('token'));
  }
}
