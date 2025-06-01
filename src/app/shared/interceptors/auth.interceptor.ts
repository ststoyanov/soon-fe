import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BEARER_TOKEN } from '../../auth/services/auth.http.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(BEARER_TOKEN);

    if (token) {
      httpRequest = httpRequest.clone({
        headers: httpRequest.headers.set('Authorization', 'Bearer ' + token),
      });
    }

    return next.handle(httpRequest);
  }
}
