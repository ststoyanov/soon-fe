import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthHttpClient } from './auth/auth-http-client';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TrackedHttpClient } from './tracked/tracked-http-client';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { MediaHttpClient } from './discover/media-http-client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: AuthHttpClient,
      useClass: AuthHttpClient,
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
