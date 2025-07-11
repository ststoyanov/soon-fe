import { inject, Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthHttpClient, BEARER_TOKEN } from '../../auth/auth-http-client';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  authHttpClient = inject(AuthHttpClient);
  intercept(httpRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(BEARER_TOKEN);

    if (token) {
      httpRequest = httpRequest.clone({
        headers: httpRequest.headers.set('Authorization', 'Bearer ' + token),
      });
    }

    return next.handle(httpRequest).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.authHttpClient.logout();
          }
        }
        return throwError(() => error);
      })
    );
  }
}
