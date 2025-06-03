import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthHttpService } from './auth/services/auth.http.service';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TrackedHttpClient } from './tracked/services/tracked-http-client';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { MediaHttpClient } from './discover/media-http-client';

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
      provide: TrackedHttpClient,
      useFactory: (http: HttpClient) => new TrackedHttpClient(http),
      deps: [HttpClient],
    },
    {
      provide: MediaHttpClient,
      useClass: MediaHttpClient,
    },
  ],
};
