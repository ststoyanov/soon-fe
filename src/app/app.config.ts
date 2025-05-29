import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthHttpService } from './auth/services/auth.http.service';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TrackedHttpService } from './tracked/services/tracked.http.service';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: AuthHttpService,
      useFactory: (http: HttpClient) => new AuthHttpService(http),
      deps: [HttpClient],
    },
    {
      provide: TrackedHttpService,
      useFactory: (http: HttpClient) => new TrackedHttpService(http),
      deps: [HttpClient],
    },
  ],
};
